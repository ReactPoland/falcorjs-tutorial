/*Here I have problems with routes.js maybe because I have changed earlier 
data imported to mongoDB as descriptions instead of descriptions , maybe here this is causing 
problems maybe somwhere else*/

/*Second thing is , that I need to stick to the same property names in some cases -
for example in my react component I am rendering descriptionContent - so I need to get from 
backend also property descriptionContent, when I wan to work with collection articles in routes.js or
somwhere else I cannot import to mongoDB collection called descriptions
*/
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/local');

var descriptionSchema = {
  descriptionTitle:String,
  descriptionContent:String
}
/*Explanations for me:
Third argument  - 'falcor-description' is name of collection of imported to mongodb ---->
mongoimport --db local --collection falcor-description --jsonArray initData.js --host=127.0.0.1
First argument is a name of a model?
Second is that variable looking like some validation
*/

var FalcorDescription = mongoose.model('FalcorDescription', descriptionSchema, 'descriptions');

let BookDescriptionsApp = [
{
  route: 'descriptions.length',
    get: () => {
    return FalcorDescription.count({}, function(err, count) {
      return count;
    }).then ((descriptionsCountInDB) => {
      return {
        path: ['descriptions', 'length'],
        value: descriptionsCountInDB
      }
    })
  }
},
{
  route: 'descriptions[{integers}]["id","descriptionTitle","descriptionContent"]',
  get: (pathSet) => {
    let descriptionsIndex = pathSet[1];

    return FalcorDescription.find({}, function(err, descriptionsDocs) {
      return descriptionsDocs;
    }).then ((descriptionsArrayFromDB) => {
      let results = [];
      descriptionsIndex.forEach((index) => {
        let singleArticleObject = descriptionsArrayFromDB[index].toObject();
        let falcorSingleDescriptionResult = {
          path: ['descriptions', index],
          value: singleArticleObject
        };
        results.push(falcorSingleDescriptionResult);
      });
      console.info(">>>> results", results);
      return results;
    })
  }
}
];

export default BookDescriptionsApp;