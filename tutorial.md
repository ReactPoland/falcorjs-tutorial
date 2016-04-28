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



