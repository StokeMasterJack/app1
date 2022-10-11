import React from 'react';
import {PageName} from './App1';
import {Box} from './Box';
import {Counter} from './Counter';
import {Hello} from './Hello';

export function Page1() {
    return <div>
        <h1>Props/State/Components/JSX Expressions/Context</h1>
        <Hello x={1}/>
        <Hello x={3}/>
        <Hello x={555}/>
        <Counter/>
        <Box height={10} width={10}/>
    </div>;
}