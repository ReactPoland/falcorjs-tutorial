import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import falcor from 'falcor';
import falcorExpress from 'falcor-express';

mongoose.connect('mongodb://localhost/local');

var tutorialSchema = {
    title:String,
    content: String,
    id: String
}

/*Explanations for me:
Third argument  - 'falcor-description' is name of collection of imported to mongodb ---->
mongoimport --db local --collection falcor-description --jsonArray initData.js --host=127.0.0.1
First argument is a name of a model?
Second is that variable looking like some validation
*/

var FalcorTutorial = mongoose.model('FalcorTutorial', tutorialSchema, 'descriptions')

var app = express();
app.server = http.createServer(app);

// CORS - 3rd party middleware
app.use(cors());

// This is required by falcor-express middleware to work correctly with falcor-browser
app.use(bodyParser.json({extended: false}));


let cache = {
  articles: [
    {
        id: 987654,
        descriptionTitle: "First title",
        descriptionContent: "Our description content 1111"
    },
    {
        id: 123456,
        descriptionTitle: "Second title hi ih hi",
        descriptionContent: "Another description content 33333"
    }
  ]
};

var model = new falcor.Model({
  cache: cache
});

app.use('/model.json', falcorExpress.dataSourceRoute(function(req, res) {
    return model.asDataSource();
}));


app.use(express.static('dist'));


app.get('/', (req, res) => { 
    FalcorTutorial.find(function (err, tutorialDescriptions) {

    	/*let importedData = tutorialDescriptions;
    	console.log("log first object title --->", importedData[0].title);
    	console.log("log second object content--->", importedData[1].content);


    	let oneTitle = `<p>${importedData[0].title}</p>`;*/

        let ourDescriptions = tutorialDescriptions.map(function(tutorialItem){
            return `<h2>${tutorialItem.title}</h2> <p>${tutorialItem.content}</p>`;
        }).join("<br/>");

        res.send(`<h1>FalcorJS Tutorial</h1> ${ourDescriptions}`);


    });
});


app.server.listen(process.env.PORT || 3000);
console.log(`Started on port ${app.server.address().port}`);

export default app;
