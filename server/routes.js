import configMongoose from './configMongoose';
import sessionRoutes from './routesSession';
import jsonGraph from 'falcor-json-graph';
import jwt from 'jsonwebtoken';
import jwtSecret from './configSecret';

let $ref = jsonGraph.ref; // this is new
let $atom = jsonGraph.atom; // this will be explained later in that chapter
let Article = configMongoose.Article;

export default ( req, res ) => {
  let { token, role, username } = req.headers;
  let userDetailsToHash = username+role;
  let authSignToken = jwt.sign(userDetailsToHash, jwtSecret.secret);
  let isAuthorized = authSignToken === token;
  let sessionObject = {isAuthorized, role, username};

  console.info(`The ${username} is authorized === `, isAuthorized);

  let PublishingAppRoutes = [
      ...sessionRoutes,
    {
    route: 'articles.length',
      get: () => {
        return Article.count({}, function(err, count) {
          return count;
        }).then ((articlesCountInDB) => {
          return {
            path: ['articles', 'length'],
            value: articlesCountInDB
          }
        })
    }
  },{
    route: 'articles[{integers}]["_id","articleTitle","articleContent"]',
    get: (pathSet) => {
      let articlesIndex = pathSet[1];

      return Article.find({}, function(err, articlesDocs) {
        return articlesDocs;
      }).then ((articlesArrayFromDB) => {
        let results = [];
        articlesIndex.forEach((index) => {
          let singleArticleObject = articlesArrayFromDB[index].toObject();

          let falcorSingleArticleResult = {
            path: ['articles', index],
            value: singleArticleObject
          };

          results.push(falcorSingleArticleResult);
        });
        return results;
      })
    }
  },{
    route: 'articlesById[{keys}]["_id","articleTitle","articleContent","articleContentJSON"]',
    get: function(pathSet) {
      let articlesIDs = pathSet[1];
      return Article.find({
            '_id': { $in: articlesIDs}
        }, function(err, articlesDocs) {
          return articlesDocs;
        }).then ((articlesArrayFromDB) => {
          let results = [];

          articlesArrayFromDB.map((articleObject) => {
            let articleResObj = articleObject.toObject();
            let currentIdString = String(articleResObj['_id']);

            if(typeof articleResObj.articleContentJSON !== 'undefined') {
              articleResObj.articleContentJSON = $atom(articleResObj.articleContentJSON);
            }

            results.push({
              path: ['articlesById', currentIdString],
              value: articleResObj
            });
          });
          return results;
        });
    }
  }];


  return PublishingAppRoutes;
}