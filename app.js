const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const assert = require('assert');
const app = express();
const config = require('./config/Db');
const appRoutes = require('./route');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/', appRoutes);

//db connection
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(res => {
        console.log('Db connected successfully');
    }).catch(err => {
        assert.equal(null, err);
    })
//cross origin resource sharing
app.use(cors());
//server
const PORT = Number(process.env.PORT || 3300);
app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);

})