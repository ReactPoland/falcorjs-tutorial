## FalcorJS tutorial

To start you need to have installed MongoDB on your computer. We will be using Robomongo GUI during this tutorial too.

First let's create our project directory called falcor-tutorial, then add js file:

```
mkdir falcor-tutorial
cd falcor-tutorial
touch data.js
```

Inside the data.js file we need to insert some data:

```
[
    {
        descriptionId: "987654",
        descriptionTitle: "First text",
        descriptionContent: "Hello World!"
    },
    {
        descriptionId: "123456",
        descriptionTitle: "Second text",
        descriptionContent: "Nice to meet you!"
    }
]
```


We need to run MongoDB in background ( I am assuming that it's already installed), just type in the terminal:

```
mongod
```

Then open Robomongo client



