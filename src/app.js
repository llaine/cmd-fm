#!/usr/bin/env node

import Api from './api.js';
import { Playlist, Track } from './models.js';
import program from 'commander';

let api = new Api();

program.version('0.0.1');

program
  .command('play <gender>')
  .description('Play a playlist with a specific genre')
  .action((gender) => {
    // TODO Instantiate the player object
    // with the map of tracks.
    let playlist = new Playlist(gender);
    playlist.getTracks().then(tracks => {
      for(let track of tracks.values()) {
        track.getStreamUrl().then(url => {
          console.log(url);
        })
      }
    });
  });

program
  .command('genres')
  .description('List all the genres availables')
  .action(() => {
    api.getGenres().then(genres => {
      genres.map(genre => {
        console.log(`- ${genre.name}`)
      });
    });
  });


program.parse(process.argv);



