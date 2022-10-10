import {useState} from 'react';
import React from 'react';
import {Game} from './blackjack';



export function BlackjackVu() {

    const [game, setGame] = useState<Game>(Game.mk({shuffle: true}));

    return <div style={{padding:'1rem'}}>
        <div>
            <button onClick={() => setGame(game.deal())}>Deal</button>
            <button onClick={() => setGame(game.hit())}>Hit</button>
            <button onClick={() => setGame(game.stay())}>Stay</button>
        </div>
        <div style={{marginTop:'1rem'}}>
            {game.msg}
        </div>
    </div>;
}