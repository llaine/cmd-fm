'use strict';

import Player from 'player';

class CmdPlayer extends Player {

    constructor(track) {
        console.log(`Create the player with ${track.title}`);
        super(track.url);
        this.listSongLoad = [];
        this.listSongLoad.push(track);
    }

    add(track) {
        this.listSongLoad.push(track);
        console.log(`Add song in the playlist ${track.title}`);
        super.add(track.url);
    }

    next() {
        super.next();
        console.log(`Play ${this.listSongLoad[this.history.length].title}`);
    }
}

export default CmdPlayer;



