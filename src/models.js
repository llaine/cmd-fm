'use strict';

import Api from './api.js';

class Playlist {
  /**
   * A Playlist contain:
   * trackList : Map
   * name : String
   * @param genre
   */
  constructor(genre) {
    this.trackList = new Map();
    this.name = genre;
    this.api = new Api();
  }

  /**
   * Fill the trackList Map with all the api can provide to us.
   */
  fetchTracks() {
    return new Promise(
        (resolve, reject) => {
          if (!this.name) reject(new Error('Undefined genre'));
          if (this.trackList.size > 0) {
            resolve(this.trackList);
          } else {
            // Fetching from the API
            this.api.getSongsFromGenre(this.name)
              .then(tracks => {
                tracks.map(track => {
                  let newTrack = new Track(track.title, track.description, track.duration,  track.stream_url,
                      track.tag_list,
                      track.waveform_url,
                      track.artwork_Url);
                  this.trackList.set(track._id, newTrack);
                });
                resolve(this.trackList);
              });
          }

        }
    )
  }

  /**
   * Get all the tracks.
   * @returns {Map|*}
   */
  getTracks() {
    return this.fetchTracks();
  }
}


let api = new Api();
class Track {
  /**
   * A track
   * @param title
   * @param description
   * @param duration
   * @param streamUrl
   * @param tagList
   * @param waveformUrl
   * @param artworkUrl
   */
  constructor(title,
              description,
              duration,
              streamUrl,
              tagList,
              waveformUrl,
              artworkUrl) {
    this.title = title;
    this.description = description;
    this.duration = duration;
    this.streamUrl = streamUrl;
    this.tagList = tagList;
    this.waveformUrl = waveformUrl;
    this.artworkUrl = artworkUrl;
  }

  getStreamUrl() {
    return api.getStreamUrlTrack(this);
  }
}


export { Playlist, Track };