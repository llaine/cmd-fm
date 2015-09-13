'use strict';

import restler from 'restler';
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
}

export default Api