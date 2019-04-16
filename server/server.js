const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 6000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/macros', { useNewUrlParser: true} );
const connection = mongoose.connection;

connection.once('open', () => console.log(`MongoDB connection established successfully. Nice job.`));

app.listen(PORT, () => console.log(`Server is up and running on port: ${PORT}`));
