import React from 'react';
import {BjAction} from './blackjack';
import {Game} from './blackjack';
import {HandVu} from './HandVu';

export function BlackjackVu({game, dispatch}: { game: Game, dispatch?: (action: BjAction) => void }) {

    const d = dispatch ?? function (action: BjAction) {
        console.log(action);
    };

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
        <h1>Blackjack</h1>
        <div>
            <button onClick={() => d({type: 'Deal'})} aria-label={'Deal'} disabled={game.isActive}>Deal</button>
            <button onClick={() => d({type: 'Hit'})} aria-label={'Hit'} disabled={!game.isActive}>Hit</button>
            <button onClick={() => d({type: 'Stay'})} aria-label={'Stay'} disabled={!game.isActive}>Stay</button>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', marginTop: '1rem'}}>
            <HandVu hand={game.ph}/>
            <HandVu hand={game.dh}/>
        </div>
        <div style={{marginTop: '1rem'}} aria-label="gameMsg">
            {game.msg}
        </div>
    </div>;
}