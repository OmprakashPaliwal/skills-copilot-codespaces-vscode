//create server

const express = require('express');
const app = express();
const port = 3000;

//create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//create a route
app.get('/comments', (req, res) => {
    res.send('This is a comments route!');
});

//start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

//run the server
//node comments.js

//open the browser and go to http://localhost:3000
//you will see 'Hello World!'

//open the browser and go to http://localhost:3000/comments
//you will see 'This is a comments route!'