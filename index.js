const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

const staticRedirect = require('./routes/staticRoutes');


const mongo = require('mongoose');

mongo.connect('url')
    .catch(err => console.log(err))
    .then(() => console.log('Connected to database')); 

const Adminroutes = require('./routes/adminRoute');

app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'));
app.use(express.static(path.resolve('./public')));

app.get('/',staticRedirect);
app.get('/amdin',);



app.listen(PORT, () => {console.log('Server is running on port 3000')});    