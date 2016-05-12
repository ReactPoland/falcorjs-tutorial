const falcor = require('falcor');
const FalcorDataSource = require('falcor-http-datasource');

let cache = {
  articles: [
    {
        id: 987654,
        descriptionTitle: "First from falcor model title yo yo yo ",
        descriptionContent: "Our from falcor model description content"
    },
    {
        id: 123456,
        descriptionTitle: "Second  from falcor model title",
        descriptionContent: "Another from falcor model hi hi hi description content"
    }
  ]
};


const model = new falcor.Model({
  "cache": cache
});

export default model;