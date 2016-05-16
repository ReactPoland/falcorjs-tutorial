/*Here I have problems with routes.js maybe because I have changed earlier 
data imported to mongoDB as descriptions instead of articles , maybe here this is causing 
problems maybe somwhere else*/

/*Second thing is , that I need to stick to the same property names in some cases -
for example in my react component I am rendering descriptionContent - so I need to get from 
backend also property descriptionContent, when I wan to work with collection articles in routes.js or
somwhere else I cannot import to mongoDB collection called descriptions
*/
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/local');

var articleSchema = {
  descriptionTitle:String,
  descriptionContent:String
}
/*Explanations for me:
Third argument  - 'falcor-description' is name of collection of imported to mongodb ---->
mongoimport --db local --collection falcor-description --jsonArray initData.js --host=127.0.0.1
First argument is a name of a model?
Second is that variable looking like some validation
*/

var Article = mongoose.model('Article', articleSchema, 'articles');

let PublishingAppRoutes = [
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
},
{
  route: 'articles[{integers}]["id","articleTitle","articleContent"]',
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
      console.info(">>>> results", results);
      return results;
    })
  }
}
];

export default PublishingAppRoutes;