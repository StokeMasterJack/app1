import React from 'react';
import {Co} from '../RLayout';
import {Hand} from './blackjack';

export const HandVu = ({hand}: { hand: Hand }) => {
    return <Co style={{margin: '1rem', padding: '.5rem', width: '10rem', height: '10rem', justifyContent: 'space-between', backgroundColor: 'lightblue'}} role="group">
        <div>
            <div style={{fontWeight: 'bold', color: 'red'}} role="contentinfo" data-testid="handName">{hand.name}</div>
            <div style={{}} role="list" data-testid="cardList">
                {hand.cards.map(card => <div key={card.name} role="listitem" data-testid="cardName">{card.name}</div>)}
            </div>
        </div>
        <div style={{fontWeight: 'bold', color: 'red'}} role="contentinfo" data-testid="handMsg">{hand.msg} </div>
    </Co>;


};
