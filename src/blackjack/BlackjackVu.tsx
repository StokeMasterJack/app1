import {useReducer} from 'react';
import {useCallback} from 'react';
import {useState} from 'react';
import React from 'react';
import {BjAction} from './blackjack';
import {Game} from './blackjack';
import {HandVu} from './HandVu';


// type Action = 'Hit' | 'Deal' | 'Stay'

export const reducer = (game: Game, action: BjAction): Game => {
    if (action.type === 'deal') return game.deal();
    if (action.type === 'hit') return game.hit();
    if (action.type === 'stay') return game.stay();
    throw Error('Bad action: ' + action);
};

export function Blackjack() {
    const [game,dispatch] = useReducer(reducer,Game.mk({shuffle: true}))
    return <BlackjackVu game={game} dispatch={dispatch}/>;

}

export function BlackjackVu({game, dispatch}: { game: Game, dispatch: (action: BjAction) => void }) {

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: 'lightgray',
        width: '30rem',
        margin: '1rem'
    }}>

        <div>
            <button onClick={() => dispatch({type: 'deal'})}>Deal</button>
            <button onClick={() => dispatch({type: 'hit'})}>Hit</button>
            <button onClick={() => dispatch({type: 'stay'})}>Stay</button>
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