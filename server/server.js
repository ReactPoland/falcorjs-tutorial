import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/local');

var tutorialSchema = {
    tutorialText:String
}

var FalcorTutorial = mongoose.model('FalcorTutorial', tutorialSchema, 'texts')

var app = express();
app.server = http.createServer(app);

// CORS - 3rd party middleware
app.use(cors());

// This is required by falcor-express middleware to work correctly with falcor-browser
app.use(bodyParser.json({extended: false}));

app.use(express.static('dist'));

// Send app data when starting

/*app.get('/', (req, res) => res.send('Publishing App Initial Application!'));*/

// Send app data from book, with articles example

/*app.get('/', (req, res) => { 
    Article.find(function (err, articlesDocs) {

        let ourArticles = articlesDocs.map(function(articleItem){
            return `<h2>${articleItem.articleTitle}</h2> ${articleItem.articleContent}`;
        }).join("<br/>");

        res.send(`<h1>Publishing App Initial Application!</h1> ${ourArticles}`);
    });
});*/

// Send app data for my tutorial example, TODO...

app.server.listen(process.env.PORT || 3000);
console.log(`Started on port ${app.server.address().port}`);

export default app;
