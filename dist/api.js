'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _restler = require('restler');

var _restler2 = _interopRequireDefault(_restler);

var _environment = require('./environment');

var Api = (function () {
  function Api() {
    _classCallCheck(this, Api);
  }

  _createClass(Api, [{
    key: 'getGenres',
    value: function getGenres() {
      return new Promise(function (resolve, reject) {
        _restler2['default'].get(_environment.settings.api.v1.genres_url).on('complete', function (result) {
          if (result instanceof Error) {
            reject(result);
          } else {
            resolve(result);
          }
        });
      });
    }
  }, {
    key: 'getSongsFromGenre',
    value: function getSongsFromGenre(genre) {
      return new Promise(function (resolve, reject) {
        _restler2['default'].get(_environment.settings.api.v1.songs_genre + genre).on('complete', function (result) {
          if (result instanceof Error) {
            reject(result);
          } else {
            resolve(result);
          }
        });
      });
    }
  }]);

  return Api;
})();

exports['default'] = Api;
module.exports = exports['default'];