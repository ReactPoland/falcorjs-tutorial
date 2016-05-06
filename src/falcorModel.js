const falcor = require('falcor');
const FalcorDataSource = require('falcor-http-datasource');

let cache = {
  articles: [
    {
        id: 987654,
        descriptionTitle: "First title is..",
        descriptionContent: "Our description content"
    },
    {
        id: 123456,
        descriptionTitle: "Second title",
        descriptionContent: "Another description content is..."
    }
  ]
};


const model = new falcor.Model({
  "cache": cache
});

export default model;