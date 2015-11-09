'use strict';

import List from 'term-list-enhanced';
import notifier from 'node-notifier';
import color from 'colorful';
import Api from './api.js';
import { Playlist, Track } from './models.js';


export default class Menu {

  /**
   *
   */
  constructor() {
    let opts = {marker:'>', markerLength:2};
    this.list = new List(opts);
    this.list.adds([
      'CMD.FM',
      '--------------------------',
      'Brought you in love'
    ]);

    this.list.start();
    this.songs = [];

    this.handleMenu();
  }

  /**
   *
   * @param genre
   */
  playlist(genre) {
    this.playlistObj = new Playlist(genre);
    this.playlistObj.getTracks().then(tracks => {
      for(let track of tracks.values()) {
        this.list.add(track.title);
      }
      this.list.draw();
    });
  }

  /**
   *
   */
  listGenres() {

  }

  handleMenu() {

    this.list.start(2);
    this.list.on('keypress', (key, index) => {
      if (key.name === 'return') {
        console.log(key.name);
      } else if (key.name === 'q') {
        return this.list.exit();
      }
    });

    this.list.on('empty', () => this.list.stop());
  }
}