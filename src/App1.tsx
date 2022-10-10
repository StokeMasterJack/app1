import {createContext} from 'react';
import {useState} from 'react';
import React from 'react';
import {BlackjackVu} from './blackjack/BlackjackVu';
import {ProvideTheme} from './ContextVars';
import {Theme} from './ContextVars';
import {Page1} from './Page1';
import {StatelessCounter} from './StatelessCounter';

export interface User {
    readonly fn: string;
    readonly ln: string;
}

export type PageName = 'Page1' | 'Page2' | 'Lists' | 'ListWithArrow' | 'StatefulComponent' | 'Blackjack'

export const UserContext = createContext<User | null>(null);

//use arrows function when passing functions
export function App1() {
    const [pageName, setPageName] = useState<PageName>('Page1');
    const [appScopeCount, setAppScopeCount] = useState(5);
    const [user, setUser] = useState<User | null>({fn: 'dave', ln: 'ford'});
    const [theme, setTheme] = useState<Theme | null>({color: 'blue'});


    const people = ['Joe', 'Sue', 'Ahmed'];

    const up = () => {
        setAppScopeCount(appScopeCount + 1);
    };

    const onPageChange = (pageName: PageName) => {
        setPageName(pageName);
    };

    return <UserContext.Provider value={user}>
        <ProvideTheme value={theme}>
            <div>
                <div style={{display: 'flex'}}>
                    <MyButton pageName={'Page1'} selectedPageName={pageName} onPageClick={() => onPageChange('Page1')}/>
                    <button onClick={() => setPageName('Page2')} style={{color: pageName === 'Page2' ? 'blue' : ''}}>Page 2</button>
                    <button onClick={() => setPageName('Lists')} style={{color: pageName === 'Lists' ? 'blue' : ''}}>Page 3</button>
                    <button onClick={() => setPageName('ListWithArrow')} style={{color: pageName === 'ListWithArrow' ? 'blue' : ''}}>Page 4</button>
                    <button onClick={() => setPageName('StatefulComponent')} style={{color: pageName === 'StatefulComponent' ? 'blue' : ''}}>Page 6</button>
                    <button onClick={() => setPageName('Blackjack')} style={{color: pageName === 'Blackjack' ? 'blue' : ''}}>Blackjack</button>
                </div>

                {pageName === 'Page1' && <Page1 name="Page2"/>}
                {pageName === 'Page2' && <Page2 name="Lists"/>}
                {pageName === 'Lists' && <Page3 people={people}/>}
                {pageName === 'ListWithArrow' && <Page4 people={people}/>}
                {pageName === 'StatefulComponent' && <Page6 count={appScopeCount} up={up}/>}
                {pageName === 'Blackjack' && <BlackjackVu/>}
            </div>
        </ProvideTheme>
    </UserContext.Provider>;


}

function Page2({name}: { name: string }) {

    return <div>
        <h1>Page 2 {name})</h1>
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

function MyButton(props: { pageName: PageName, selectedPageName: PageName, onPageClick: (pageName: PageName) => void }) {

    const onPageClickInternal = () => {
        props.onPageClick(props.pageName);
    };
    return <button onClick={onPageClickInternal} style={{color: props.pageName === props.selectedPageName ? 'blue' : ''}}>Page 1</button>;
}











