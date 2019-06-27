const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.port || 6000;

const app = express();

app.use(bodyParser.json());

const database = require('./config/keys').mongoURI;

mongoose.connect(database, {useNewUrlParser: true})
    .then( () => console.log('Connection to MongoDB is now up and running... :)'))
        .catch(err => console.error(err));

app.listen(port, () => console.log(`Server is now started on port ${port}`));