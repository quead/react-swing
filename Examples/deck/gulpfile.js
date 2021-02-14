/**
 * @project react-swing
 * Created by quead
 */

'use strict';

var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('legacy', function (callback) {
  var webpackConfig = require('./webpack.config.js');
  new WebpackDevServer(webpack(webpackConfig), {
    contentBase: './build',
    hot: true,
  }).listen(8000, '0.0.0.0', function (err, result) {
    if (err) {
      console.log(err);
    }
  });
  callback();
});

gulp.task('server', function (callback) {
  var webpackConfig = require('./webpack.config.js');
  new WebpackDevServer(
    webpack({
      ...webpackConfig,
      entry: {
        'bundle.js': ['./index.js'],
      },
    }),
    {
      contentBase: './build',
      hot: true,
    },
  ).listen(8000, '0.0.0.0', function (err, result) {
    if (err) {
      console.log(err);
    }
  });
  callback();
});

gulp.task('default', gulp.series('server'));
