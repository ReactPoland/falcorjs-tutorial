/*Here I have problems with routes.js maybe because I have changed earlier 
data imported to mongoDB as descriptions instead of articles , maybe here this is causing 
problems maybe somwhere else*/

/*Second thing is , that I need to stick to the same property names in some cases -
for example in my react component I am rendering descriptionContent - so I need to get from 
backend also property descriptionContent, when I wan to work with collection articles in routes.js or
somwhere else I cannot import to mongoDB collection called descriptions
*/

let PublishingAppRoutes = [
{
  route: 'articles.length',
  get: () => {
    let articlesCountInDB = 2; // hardcoded for example
    return {
      path: ['articles', 'length'],
      value: articlesCountInDB
    };
  }
},
{
  route: 'articles[{integers}]["id","descriptionTitle","descriptionContent"]',
  get: (pathSet) => {
  	console.info("pathSet is ----> ",pathSet);
    let articlesIndex = pathSet[1];
    let articlesArrayFromDB = [{
      "articleId": "987654",
      "descriptionTitle": "BACKEND Lorem ipsum - article one",
      "descriptionContent": "BACKEND Here goes the content of the article"
    }, {
      "articleId": "123456",
      "descriptionTitle": "BACKEND Lorem ipsum - article two",
      "descriptionContent": "BACKEND Sky is the limit, the content goes here."
    }]; // That are our mocked articles from MongoDB

    let results = [];
    articlesIndex.forEach((index) => {
      let singleArticleObject = articlesArrayFromDB[index];
      let falcorSingleArticleResult = {
        path: ['articles', index],
        value: singleArticleObject
      };
      results.push(falcorSingleArticleResult);
    });
    console.info(results);
    return results;
  }
}
];

export default PublishingAppRoutes;