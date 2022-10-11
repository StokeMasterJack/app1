import {render, screen} from '@testing-library/react';
import React from 'react';
import {Hand} from './blackjack';
import {HandVu} from './HandVu';

test('HandVu', () => {
    render(<HandVu hand={Hand.mk({name: 'Player'})}/>);
    const linkElement = screen.getByText(/Player/i);
    expect(linkElement).toBeInTheDocument();
});

