import falcor from 'falcor';
import falcorExpress from 'falcor-express';
import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Router from 'falcor-router';
import routes from './routes.js';


mongoose.connect('mongodb://localhost/local');

var articleSchema = {
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

/*BLAD JEST TUTAJ I JESZCZE TAM GDZIE WPROWADZILEM ZMIANY, PRZESLEDZIC I NAPRAWIC*/
/*A JEZELI TO NIE POMOZE NO TO ZAJRZEC DO MAIN VIEW COMPONENTU REACTOWEGO , 
TAM SIE WYSWIETLA DANE PRZECIEZ*/
var Article = mongoose.model('Article', articleSchema, 'articles')

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
        articleTitle: "Lorem ipsum - article one",
        articleContent: "Here goes the content of the article"
    },
    {
        id: 123456,
        articleTitle: "Lorem ipsum - article two from backend",
        articleContent: "Sky is the limit, the content goes here."
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
    Article.find(function (err, articlesDocs) {

    	/*let importedData = tutorialDescriptions;
    	console.log("log first object title --->", importedData[0].title);
    	console.log("log second object content--->", importedData[1].content);


    	let oneTitle = `<p>${importedData[0].title}</p>`;*/

        let ourDescriptions = articlesDocs.map(function(tutorialItem){
            return `<h2>${tutorialItem.articleTitle}</h2> <p>${tutorialItem.articleContent}</p>`;
        }).join("<br/>");

        res.send(`<h1>FalcorJS Tutorial</h1> ${ourDescriptions}`);


    });
});


app.server.listen(process.env.PORT || 3000);
console.log(`Started on port ${app.server.address().port}`);

export default app;


/*let cache = {
  articles: [
    {
        id: 987654,
        descriptionTitle: "First title form server js file",
        descriptionContent: "Our description content"
    },
    {
        id: 123456,
        descriptionTitle: "Second title",
        descriptionContent: "Another description content from server js file "
    }
  ]
};

var model = new falcor.Model({
  cache: cache
});*/