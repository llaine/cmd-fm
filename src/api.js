'use strict';

import restler from 'restler';
import request from 'request';

import { settings } from './environment';

class Api {
  constructor() {

  }

  getGenres() {
    return new Promise(
        function(resolve, reject) {
          restler
          .get(settings.api.v1.genres_url)
          .on('complete', result => {
            if(result instanceof Error) {
              reject(result)
            } else {
              resolve(result);
            }
          });
        }
    )
  }

  getSongsFromGenre(genre) {
    return new Promise(
        function(resolve, reject) {
          restler
            .get(settings.api.v1.songs_genre + genre)
            .on('complete', result => {
              if(result instanceof Error) {
                reject(result)
              } else {
                resolve(result);
              }
            })
        }
    )
  }

  getStreamUrlTrack(track){
    return new Promise(
        function(resolve, reject) {
            var urlSoundCloud = track.streamUrl + settings.api.v1.clientid_soundcloud;
            var _options = {
                uri: urlSoundCloud,
                followAllRedirects: true
            };
            request.get(_options, (err, res, body) => {
                if(err){
                    reject(err);
                } else if(res && res.statusCode === 200) {
                    resolve(res.request.uri.href);
                }
            })
        }
    )
  }
}

export default Api