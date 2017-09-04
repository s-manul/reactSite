const express = require('express');
const mainRouter = require('./src/server/routes/mainRouter');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const config = require('./webpack.dev.config.js');
const app = express();

const env = process.env.NODE_ENV;
const port = process.env.PORT || 8080;
const mongoURL = env === 'development' ? 'mongodb://localhost/site' : 'mongodb://phil:philko@ds129183.mlab.com:29183/site';
mongoose.Promise = global.Promise;
mongoose.connect(mongoURL, {useMongoClient: true});

const compiler = webpack(config);

app.use(express.static('build'));
app.use(bodyParser.json());
app.use(mainRouter);

app.use(webpackDevMiddleware(compiler, {
    publicPath: "/build/",
}));
app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

app.listen(port, () => {
    console.log('listening to port ' + port);
});