import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {Blackjack} from './Blackjack';

test('Blackjack', async () => {

    render(<Blackjack/>);

    expect(await screen.findByLabelText('gameMsg')).toHaveTextContent(/Press Hit or Stay/i);

    await userEvent.click(await screen.findByLabelText('Hit'));
    expect(await screen.findByLabelText('gameMsg')).toHaveTextContent(/Press Hit or Stay/i);

    await userEvent.click(await screen.findByLabelText('Hit'));
    expect(await screen.findByLabelText('gameMsg')).toHaveTextContent(/Press Hit or Stay/i);

    await userEvent.click(await screen.findByLabelText('Hit'));
    expect(await screen.findByLabelText('gameMsg')).toHaveTextContent(/Player Wins/i);

    await userEvent.click(await screen.findByLabelText('Deal'));
    expect(await screen.findByLabelText('gameMsg')).toHaveTextContent(/Press Hit or Stay/i);

    await userEvent.click(await screen.findByLabelText('Stay'));
    expect(await screen.findByLabelText('gameMsg')).toHaveTextContent(/Dealer Wins/i);

});

