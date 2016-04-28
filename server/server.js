import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/local');

var tutorialSchema = {
    descriptionTitle:String,
    descriptionContent: String,
    descriptionId: Number
}

/*Explanations for me:
Third argument  - 'falcor-description' is name of collection of imported to mongodb ---->
mongoimport --db local --collection falcor-description --jsonArray initData.js --host=127.0.0.1
First argument is a name of a model?
Second is that variable looking like some validation
*/

var FalcorTutorial = mongoose.model('FalcorTutorial', tutorialSchema, 'falcor-descriptions')

var app = express();
app.server = http.createServer(app);

// CORS - 3rd party middleware
app.use(cors());

// This is required by falcor-express middleware to work correctly with falcor-browser
app.use(bodyParser.json({extended: false}));

app.use(express.static('dist'));

app.get('/', (req, res) => { 
    FalcorTutorial.find(function (err, tutorialDescriptions) {

        let ourDescriptions = tutorialDescriptions.map(function(tutorialItem){
            return `<h2>${tutorialItem.descriptionTitle}</h2> ${tutorialItem.descriptionContent}`;
        }).join("<br/>");

        res.send(`<h1>Publishing App Initial Application!</h1> ${ourDescriptions}`);
    });
});


app.server.listen(process.env.PORT || 3000);
console.log(`Started on port ${app.server.address().port}`);

export default app;
