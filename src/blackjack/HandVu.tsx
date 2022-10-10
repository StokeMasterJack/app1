import React from 'react';
import {Hand} from './blackjack';

export const HandVu = ({hand}:{hand: Hand}) => {
    console.log("HandVu" + hand.name);
    return <div style={{margin:'1rem'}}>
        <div>{hand.name}</div>
        <div style={{backgroundColor: 'lightblue'}}>
            {hand.cards.map(card => <div>{card.name}</div>)}
        </div>
        <div>{hand.msg}</div>
    </div>;


};
