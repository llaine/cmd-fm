'use strict';

import Player from 'player';
import Readline from 'readline';
import colors from 'colors';

class CmdPlayer {

    constructor(track) {
        console.log(`Create the player with ${track.title}` .blue);
        this.player = new Player(track.url);
        this.listSongLoad = [];
        this.listSongLoad.push(track);
        this.rl = Readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    add(track) {
        console.log(`Add song in the playlist ${track.title}` .green);
        this.listSongLoad.push(track);
        this.player.add(track.url);
    }

    next() {
        console.log(this.player);
        console.log(`Play ${this.listSongLoad[this.player.history.length].title}` .blue);
        this.player.next();
    }

    prompt() {
        var self = this;
        self.rl.question('@: ', (answer) => {
            switch (answer) {
                case 'n':
                    self.next();
                    self.rl.close();
                    break;
                case 'p':
                    self.player.pause();
                    self.rl.close();
                    break;
            }
        });
    };


    play() {
        var self = this;
        self.player.play();
        self.player.on('playing', () => {
            self.prompt();
        });
    }
}

export default CmdPlayer;



