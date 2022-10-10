import {useState} from 'react';
import React from 'react';
import {Box} from './Box';
import {Counter} from './Counter';
import {Hello} from './Hello';

export function App1() {
    const [pageName, setPageName] = useState('Page1');


    // function p1() {
    //     setPageName('Page1');
    // }
    //
    // function p2() {
    //     setPageName('Page2');
    // }

    return <div>
        <div style={{display: 'flex'}}>
            <button onClick={() => setPageName('Page1')}>Page 1</button>
            <button onClick={() => setPageName('Page2')}>Page 2</button>
        </div>

        {/*{pageName === 'Page1' ? <Page1/> : <Page2/>}*/}

        {/*<hr/>*/}

        {pageName === 'Page1' && <Page1/>}
        {pageName === 'Page2' && <Page2/>}
    </div>;
}

function Page1() {
    return <div>
        <h1>Page 1</h1>
        <Hello x={1}/>
        <Hello x={3}/>
        <Hello x={555}/>
        <Counter/>
        <Box height={10} width={10}/>
    </div>;
}

function Page2() {
    return <div>
        <h1>Page 2</h1>
        <p>Page 2</p>
    </div>;
}