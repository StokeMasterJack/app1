import React from 'react';
import {HGap} from '../RLayout';
import {Ro} from '../RLayout';
import {Co} from '../RLayout';
import {BjAction} from './blackjack';
import {Game} from './blackjack';
import {HandVu} from './HandVu';

export function BlackjackVu({game, dispatch}: { game: Game, dispatch?: (action: BjAction) => void }) {

    const d = dispatch ?? function (action: BjAction) {
        console.log(action);
    };

    return <Co style={{backgroundColor:''}}>
        <h1>Blackjack</h1>
        <Co style={{
            justifyContent: 'center',
            alignItems: 'stretch',
            // padding: '1rem',
            // backgroundColor: 'lightgray',
            // width: '30rem',
            // margin: '1rem'
        }}>

            <Ro>
                <button onClick={() => d({type: 'Deal'})} aria-label={'Deal'} disabled={game.isActive}>Deal</button>
                <button onClick={() => d({type: 'Hit'})} aria-label={'Hit'} disabled={!game.isActive}>Hit</button>
                <button onClick={() => d({type: 'Stay'})} aria-label={'Stay'} disabled={!game.isActive}>Stay</button>
            </Ro>
            <Ro style={{display: 'flex', flexDirection: 'row', marginTop: '1rem'}}>
                <HandVu hand={game.ph}/>
                <HGap/>
                <HGap/>
                <HandVu hand={game.dh}/>
            </Ro>
            <Ro style={{marginTop: '1rem',color:'blue',fontWeight:'bold',fontSize:'larger',justifyContent:'center',backgroundColor:''}} aria-label="gameMsg">
                {game.msg}
            </Ro>
        </Co>
    </Co>;
}