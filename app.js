//jshint esversion:6
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
require('dotenv').config()
const mongoose = require('mongoose');

//Connect to database
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Connected to database');
}).catch(() => {
    console.log('Connection failed');
})

// Port
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


//routes
app.use('/', require('./routes/user'));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})

