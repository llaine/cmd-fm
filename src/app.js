#!/usr/bin/env node

import Api from './api.js';
import program from 'commander';

let api = new Api();

program.version('0.0.1');

program
  .command('play <gender>')
  .description('Play a playlist with a specific genre')
  .action((gender) => {
    api.getSongsFromGenre(gender).then(tracks => {
      //Just display first element to test api return
      console.log(gender);
      var track = tracks[0];
      api.getStreamUrlTrack(track).then(trackUrl => {
          console.log(trackUrl);
      });
    })
  });

program
  .command('genres')
  .description('List all the genres availables')
  .action(() => {
/*
    { _id: '55949622cd57d1b21cd96d46',
        cmdfm_id: 126,
        name: 'Technology',
        oname: 'Technology',
        status: true,
        slug: 'technology',
        id: 1 },
*/

    api.getSongsFromGenre('minimal').then(genres => {
    console.log(genres[0].title);
    });
  });


program.parse(process.argv);



