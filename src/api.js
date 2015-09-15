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
            var urlSoundCloud = track.stream_url + settings.api.v1.clientid_soundcloud;
            request.get(urlSoundCloud, (err, res, body) => {
                if(err){
                    reject(err);
                } else {
                    resolve(res.request.uri.href);
                }
            })
        }
    )
  }
}

export default Api