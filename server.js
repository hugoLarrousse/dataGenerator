/* Modules */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').createServer(app);

const port = 8001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.status(200).send("ok");
});

server.listen(port, function (res) {
    console.log("DataGenerator API is running on " + port);
});
