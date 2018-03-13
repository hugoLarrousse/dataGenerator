/* Modules */
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const { generateDate } = require('./uinamesApi');

const app = express();
const server = require('http').createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', async (req, res) => {
    const data = await generateDate(req.query.size || 0);
    res.status(200).json(data);
});

server.listen(config.port, function (res) {
    console.log("DataGenerator API is running on " + port);
});
