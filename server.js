/* Modules */
const express = require('express');
const bodyParser = require('body-parser');
const { generateDate } = require('./uinamesApi');

const app = express();
const server = require('http').createServer(app);

const port = 8001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', async (req, res) => {
    const data = await generateDate(5)
    res.status(200).json(data);
});

server.listen(port, function (res) {
    console.log("DataGenerator API is running on " + port);
});
