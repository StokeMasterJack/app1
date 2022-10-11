import {useState} from 'react';
import React from 'react';
import {Game} from './blackjack';
import {HandVu} from './HandVu';

export function BlackjackVu() {

    const [game, setGame] = useState<Game>(Game.mk({shuffle: true}));

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: 'lightgray',
        width: '30rem',
        margin: '1rem'}}>

        <div>
            <button onClick={() => setGame(game.deal())}>Deal</button>
            <button onClick={() => setGame(game.hit())}>Hit</button>
            <button onClick={() => setGame(game.stay())}>Stay</button>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', marginTop: '1rem'}}>
            <HandVu hand={game.ph}/>
            <HandVu hand={game.dh}/>
        </div>
        <div style={{marginTop: '1rem'}}>
            {game.msg}
        </div>
    </div>;
}