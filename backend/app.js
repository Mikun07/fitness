const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app  = express();
const port = 2500;

// process.env.ATLAS_URI
//|| 'mongodb://localhost:27017'
const uri = process.env.ATLAS_URI ;

mongoose.connect(uri, { useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            app.listen(port, () => {
                console.log('connected to mongodb Server');
                console.log(`now listening on port: ${port}`)
            })
        })
        .catch( err => {
            console.log(err);
        });

app.use(cors());
app.use(express.json());
app.use('/users', require('./routes/users'));
app.use('/exercises', require('./routes/exercise'));



