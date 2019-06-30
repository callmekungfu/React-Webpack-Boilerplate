/**
 * THIS SERVER IS ONLY USED FOR DEVELOPMENT PURPOSES.
 * IT ONLY ACTS AS A DEV MIDDLEWARE TO ENABLE HOT MODULE RELOADING
 * AND CHANGE WATCHING.
 */
const path = require('path'),
  express = require('express'),
  webpack = require('webpack'),
  webpackConfig = require('./environments/webpack.dev.js'),
  app = express(),
  port = process.env.PORT || 3000;
let compiler = webpack(webpackConfig);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  mode: 'development',
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  }
}));
app.use(require('webpack-hot-middleware')(compiler, {
  noInfo: true,
  mode: 'development',
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  }
}));
app.use(express.static(path.resolve(__dirname, 'dist')));