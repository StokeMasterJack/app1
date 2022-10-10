import {useState} from 'react';
import React from 'react';
import {Game} from './blackjack';



export function BlackjackVu() {

    const [game, setGame] = useState<Game>(Game.mk({shuffle: true}));

    return <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'1rem',backgroundColor:"gray",width:'20'}}>
        <div>
            <button onClick={() => setGame(game.deal())}>Deal</button>
            <button onClick={() => setGame(game.hit())}>Hit</button>
            <button onClick={() => setGame(game.stay())}>Stay</button>
        </div>
        <div style={{display:'flex',marginTop:'1rem'}}>
        <div style={{marginRight:'.5rem',backgroundColor:"lightblue"}}>
            {game.ph.cards.map(card => <div>{card.name}</div>)}
        </div>
        <div   style={{marginLeft:'.5rem',backgroundColor:"lightblue"}}>
            {game.dh.cards.map(card => <div>{card.name}</div>)}
        </div>
        </div>
        <div style={{marginTop:'1rem'}}>
            {game.msg}
        </div>
    </div>;
}