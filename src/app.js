#! /usr/bin/env node --harmony

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
    var cmdPlayer;
    playlist.getTracks().then(tracks => {
      for(let track of tracks.values()) {
        track.getStreamUrl().then(url => {
          track.url = url;
          if(!cmdPlayer){
            cmdPlayer = new CmdPlayer(track);
            cmdPlayer.play();
          }else{
            cmdPlayer.add(track);
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



