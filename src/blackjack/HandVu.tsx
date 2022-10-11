import React from 'react';
import {Hand} from './blackjack';

export const HandVu = ({hand}:{hand: Hand}) => {
    return <div style={{margin:'1rem',padding:'.5rem',width:'10rem',height:'10rem',display:'flex',flexDirection:'column',justifyContent:'space-between',backgroundColor: 'lightblue'}}>
        <div>
            <div style={{fontWeight: 'bold',color:'red'}}>{hand.name}</div>
            <div style={{}}>
                {hand.cards.map(card => <div key={card.name}>{card.name}</div>)}
            </div>
        </div>
        <div style={{fontWeight:'bold',color:'red'}}>{hand.msg}</div>
    </div>;


};
