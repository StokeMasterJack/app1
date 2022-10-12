import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import React from 'react';
import {Deck} from './blackjack';
import {Hand} from './blackjack';
import {HandVu} from './HandVu';

test('HandVu', async () => {

    const [cards] = Deck.mk({shuffle: false}).take(2);
    const hand = Hand.mk({name: 'Player'}).add(cards);

    render(<HandVu hand={hand}/>);

    const handNameElement = await screen.findByTestId('handName');
    expect(handNameElement).toHaveTextContent('Player');

    const cardListElement = await screen.findByTestId('cardList');
    expect(cardListElement).toHaveTextContent('Ace of Spades');
    expect(cardListElement).toHaveTextContent('2 of Spades');

    const handMsgElement = await screen.findByTestId('handMsg');
    expect(handMsgElement).toHaveTextContent('3 Points.');
});

