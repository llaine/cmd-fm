#!/usr/bin/env node
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _apiJs = require('./api.js');

var _apiJs2 = _interopRequireDefault(_apiJs);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var api = new _apiJs2['default']();

_commander2['default'].version('0.0.1');

_commander2['default'].command('play <gender>').description('Play a playlist with a specific genre').action(function (gender, options) {
  console.log('\n        You guys want to play\n        ' + gender + '\n      ');
});

_commander2['default'].command('genres').description('List all the genres availables').action(function () {
  api.getGenres().then(function (genres) {
    console.log(genres);
  });
});

_commander2['default'].parse(process.argv);