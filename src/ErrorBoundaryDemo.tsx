import {useState} from 'react';
import React from 'react';
import {ErrorBoundary} from './ErrorBoundary';
import {VGap} from './RLayout';
import {Ro} from './RLayout';

function ErrorBoundaryDemoInner() {

    const [dice, setDice] = useState(1);
    const [crash, setCrash] = useState(false);

    const onClick = () => {
        setDice(Math.ceil(Math.random() * 6));
    };


    if (dice === 6) {
        window.setTimeout(() => {
            setCrash(true);
        }, 2000);
    }

    if (crash) {
        throw Error('Boom');
    }

    return <div>
        <h1>ErrorBoundaryDemo</h1>
        <p>If Dice hits 6 an error is thrown. The message "Something went wrong" will be displayed. Better than taking out the whole app.</p>
        <Ro>Dice: {dice}</Ro>
        <Ro>{dice === 6 ? 'Crash' : ''}</Ro>
        <VGap/>
        <button onClick={onClick} disabled={dice === 6}>Roll the Dice</button>


    </div>;
}

export const ErrorBoundaryDemo = () => <ErrorBoundary><ErrorBoundaryDemoInner/></ErrorBoundary>;