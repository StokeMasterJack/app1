import {useState} from 'react';
import React from 'react';
import {Box} from './Box';
import {Counter} from './Counter';
import {Hello} from './Hello';
import {StatelessCounter} from './StatelessCounter';

// var
//  const /let
//use arrows function when passing functions
export function App1() {
    const [pageName, setPageName] = useState('Page1');
    const [appScopeCount, setAppScopeCount] = useState(5);

    const people = ['Joe', 'Sue', 'Ahmed'];

    const up = () => {
        setAppScopeCount(appScopeCount + 1);
    };

    return <div>
        <div style={{display: 'flex'}}>
            <button onClick={() => setPageName('Page1')} style={{color: pageName === 'Page1' ? 'blue' : ''}}>Page 1</button>
            <button onClick={() => setPageName('Page2')} style={{color: pageName === 'Page2' ? 'blue' : ''}}>Page 2</button>
            <button onClick={() => setPageName('Page3')} style={{color: pageName === 'Page3' ? 'blue' : ''}}>Page 3</button>
            <button onClick={() => setPageName('Page4')} style={{color: pageName === 'Page4' ? 'blue' : ''}}>Page 4</button>
            <button onClick={() => setPageName('Page6')} style={{color: pageName === 'Page6' ? 'blue' : ''}}>Page 6</button>
        </div>

        {pageName === 'Page1' && <Page1/>}
        {pageName === 'Page2' && <Page2/>}
        {pageName === 'Page3' && <Page3 people={people}/>}
        {pageName === 'Page4' && <Page4 people={people}/>}
        {pageName === 'Page6' && <Page6 count={appScopeCount} up={up}/>}
    </div>;
}

function Page1() {
    return <div>
        <h1>Props/State/Components/JSX Expressions</h1>
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

function Page3({people}: { people: Array<string> }) {

    function mappingFunction(personName: string) {
        return <li>{personName}</li>;
    }

    return <div>
        <h1>Page: Lists</h1>
        <ul>
            {people.map(mappingFunction)}
        </ul>
    </div>;
}

function Page4({people}: { people: Array<string> }) {

    return <div>
        <h1>Page4: Lists with Arrow functions</h1>
        <ul>
            {people.map(personName => <li>{personName}</li>)}
        </ul>
    </div>;

}


const Page6 = (props: { count: number, up: () => void }) => {
    return <StatelessCounter count={props.count} up={props.up}/>;
};


const arrowFunction1 = (x: number, y: number) => {
    return x + y;
};


const arrowFunction2 = (x: number, y: number) => x + y;











