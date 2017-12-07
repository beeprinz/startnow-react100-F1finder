const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

//Create a route that calls the api endpoint. Return back to client. Set up proxy server for axios req.
app.get('/api', (req,res) => {
    axios
    .get("http://ergast.com/api/f1/2017.json")
    .then(r => res.send(r.data))
    .catch(err => res.status(500).send('bad response'));
})

module.exports = app;
