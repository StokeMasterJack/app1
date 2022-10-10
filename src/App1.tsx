import React from 'react';
import {Box} from './Box';
import {Counter} from './Counter';
import {Hello} from './Hello';

export function App1() {
    return <div>
        <Hello x={1}/>
        <Hello x={3}/>
        <Hello  x={555}/>
        <Counter/>
        <Box length={10} width={10}/>
    </div>;
}