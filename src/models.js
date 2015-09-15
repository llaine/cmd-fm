'use strict';

import Api from 'api.js';

export default class Playlist {
  /**
   * A Playlist contain:
   * trackList : Map
   * name : String
   * slug : String
   * @param opts
   */
  constructor(opts) {
    this.trackList = new Map();
    this.name = opts.name;
    this.slug = opts.slug;
    this.api = new Api();
    fetchTracks();
  }

  /**
   * Fill the trackList Map with all the api can provide to us.
   */
  fetchTracks() {
    if (this.name) {
      this.api.getSongsFromGenre(this.name)
        .then(tracks => {
          tracks.map(track => {
            let newTrack = new Track(track.title, track.description, track.duration,  track.stream_url,
                track.tag_list,
                track.waveform_url,
                track.artwork_Url);
            this.trackList.set(track._id, newTrack);
          });
        });
    }
  }

  /**
   * Get all the tracks.
   * @returns {Map|*}
   */
  getTracks() {
    return this.trackList;
  }
}


export default class Track {
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
    // TODO
  }
}