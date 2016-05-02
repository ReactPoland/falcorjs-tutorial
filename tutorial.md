## FalcorJS tutorial

To start you need to have installed MongoDB on your computer. We will be using Robomongo GUI during this tutorial too.

First let's create our project directory called falcor-tutorial, then add data.js file:

```
mkdir falcor-tutorial
cd falcor-tutorial
touch data.js
```

Inside the data.js file we need to insert some data in JSON format:

```
[
    {
        id: "987654",
        title: "First text",
        content: "Hello World!"
    },
    {
        id: "123456",
        title: "Second text",
        content: "Nice to meet you!"
    }
]
```


We need to run MongoDB in background ( I am assuming that it has been already installed), just type in the terminal:

```
mongod
```

Then open Robomongo client.

Another step is to import our data object we created earlier to our MongoDB:

```
mongoimport --db local --collection descriptions --jsonArray data.js --host=127.0.0.1
```

After executing this command we can view through Robomongo that data was succesfully imported :

![Robomongo view data](data-falcor-tutorial.jpg)

### Now let's do server setup with NodeJS and Express.js

First step is to initialze NPM project in our directory and create a server.js and index.js files in server directory:
```
npm init --yes

mkdir server
cd server
touch index.js
touch server.js
```

Then install all necessary dependencies:
```
npm i express@4.13.4 babel@4.7.16 babel-register@6.5.2 cors@2.7.1 body-parser@1.15.0 --save
```

The index.js file:
```
require("babel/register");
require('./server');
```



And the server.js file with simple string viewed on the app screen should look like this :
```
import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

var app = express();
app.server = http.createServer(app);

// CORS - 3rd party middleware
app.use(cors());

// This is required by falcor-express middleware to work correctly with falcor-browser
app.use(bodyParser.json({extended: false}));

app.get('/', (req, res) => res.send('FalcorJS Tutorial'));

app.server.listen(process.env.PORT || 3000);
console.log(`Started on port ${app.server.address().port}`);

export default app;

```
Next run this command in terminal:
```
node server/index.js 
```
After running this through node js, 'FalcorJS Tutorial' string that we are sending should show on the screen:

![Display header](falcor-header.jpg)