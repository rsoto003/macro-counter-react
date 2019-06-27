const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const macroItems = require('./routes/api/items');

app.use(bodyParser.json());

const database = require('./config/keys').mongoURI;

mongoose.connect(database, {useNewUrlParser: true})
    .then( () => console.log('Connection to MongoDB is now up and running... :)'))
        .catch(err => console.error(err));

app.use('api/items', macroItems);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server is now started on port ${port}`));