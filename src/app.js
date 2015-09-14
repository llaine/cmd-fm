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
            console.log(tracks);
            //api.getStreamTrack(tracks[0]).then(track => {
            //    console.log(track);
            //});
        })
    });

program
    .command('genres')
    .description('List all the genres availables')
    .action(() => {
      api.getGenres().then(genres => {
        console.log(genres);
      });
    });



program.parse(process.argv);



