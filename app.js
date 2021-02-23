//impost package we will using
const express = require('express');
const path = require('path');
const hbs = require('hbs');


const app = express();

const port = process.env.PORT || 5050;

//tell express to watch views folder
app.set('views', path.join(__dirname, 'views'));
//handke bar
app.set('views engine', 'hbs' );

//look public directory
app.set(express.static(path.join(__dirname, 'public')));

// '/' will redirect to './routes/index'
app.use('/', require('./routes/index'));

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});