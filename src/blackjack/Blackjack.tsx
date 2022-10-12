import {useReducer} from 'react';
import React from 'react';
import {BjAction} from './blackjack';
import {Game} from './blackjack';
import {BlackjackVu} from './BlackjackVu';

export const reducer = (game: Game, action: BjAction): Game => {
    if (action.type === 'Deal') return game.deal();
    if (action.type === 'Hit') return game.hit();
    if (action.type === 'Stay') return game.stay();
    throw Error('Bad action: ' + action);
};

export function Blackjack() {
    const [game, dispatch] = useReducer(reducer, Game.mk({shuffle: false}));
    return <BlackjackVu game={game} dispatch={dispatch}/>;
}
