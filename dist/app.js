#!/usr/bin/env node
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _environment = require('./environment');

var usersArgs = process.argv.slice(2);
var gender = usersArgs[0];

(0, _request2['default'])(_environment.settings.api.v1.gender_url, function (err, response, body) {
    console.log(response.statusCode);
});