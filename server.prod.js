const express = require('express');
const path = require('path');
const mainRouter = require('./src/server/routes/mainRouter');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const env = process.env.NODE_ENV;
const port = process.env.PORT || 80;
const mongoURL = env === 'development' ? 'mongodb://localhost/site' : 'mongodb://sergey:123@ds123312.mlab.com:23312/web-site';
mongoose.Promise = global.Promise;
mongoose.connect(mongoURL, {useMongoClient: true});

const ClientStatsPath = path.join(__dirname, './build/stats.json');
const ServerRendererPath = path.join(__dirname, './build/server.js');
const ServerRenderer = require(ServerRendererPath).default;
const Stats = require(ClientStatsPath);

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(mainRouter);
app.use(ServerRenderer(Stats));

app.listen(port, () => {
    console.log('listening to port ' + port);
});