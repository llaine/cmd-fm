#!/usr/bin/env node

import Api from './api.js';
import { Playlist, Track } from './models.js';
import program from 'commander';
import CmdPlayer from './cmdPlayer.js';

let api = new Api();

program.version('0.0.1');

program
  .command('play <gender>')
  .description('Play a playlist with a specific genre')
  .action((gender) => {
    let playlist = new Playlist(gender);
    playlist.getTracks().then(tracks => {
      var cmdPlayer;
      for(let track of tracks.values()) {
        track.getStreamUrl().then(url => {
          if(!cmdPlayer){
            console.log(`- Create the player with ${track.title}`);
            cmdPlayer = new CmdPlayer(url);
            cmdPlayer.play();
          }else{
            console.log(`- Add  song in the playlist ${track.title}`);
            cmdPlayer.add(url);
          }
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



