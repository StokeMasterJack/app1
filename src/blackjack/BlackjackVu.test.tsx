import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import React from 'react';
import {Game} from './blackjack';
import {BlackjackVu} from './BlackjackVu';

test('BlackjackVu', async () => {


    render(<BlackjackVu game={Game.mk({shuffle: false})} />);

    expect(await screen.findByLabelText('gameMsg')).toHaveTextContent('Press Hit or Stay.');

    const buttons = await screen.findAllByRole('button');
    expect(buttons.length).toBe(3);

    const dealButton = await screen.findByLabelText('Deal');
    expect(dealButton).toBeDisabled();

    const hitButton = await screen.findByLabelText('Hit');
    expect(hitButton).toBeEnabled();

    const stayButton = await screen.findByLabelText('Stay');
    expect(stayButton).toBeEnabled();

});

