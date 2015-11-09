#!/usr/local/bin/node
import program from 'commander';
import Menu from './menu.js';
let menu = new Menu();

program
  .version('0.0.1')
  .usage('cmd.fm cli app');

program
  .command('play <gender>')
  .description('Launch a playlist with a specific genre')
  .action((gender) => {
    menu.playlist(gender);
    //let playlist = new Playlist(gender);
    //var cmdPlayer;
    //playlist.getTracks().then(tracks => {
    //  for(let track of tracks.values()) {
    //    track.getStreamUrl().then(url => {
    //      track.url = url;
    //      console.log(track);
    //    })
    //  }
    //});
  });

program
  .command('genres')
  .description('List all the genres availables')
  .action(() => {
    menu.listGenres()

    //api.getGenres().then(genres => {
    //  genres.map(genre => {
    //    console.log(`- ${genre.name}`)
    //  });
    //});
  });


program.parse(process.argv);



