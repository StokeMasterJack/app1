import {useState} from 'react';
import React from 'react';
import {BlackjackVu} from './blackjack/BlackjackVu';
import {ListsPage} from './ListsPage';
import {ListsWithArrowPage} from './ListsWithArrowPage';
import {Page1} from './Page1';
import {Page2} from './Page2';
import {StatelessCounterPage} from './StatelessCounterPage';
import {ProvideTheme} from './ThemeContext';
import {Theme} from './ThemeContext';
import {User} from './UserContext';
import {ProvideUser} from './UserContext';

export type PageName = 'Page1' | 'Page2' | 'Lists' | 'ListWithArrow' | 'AppScopeCounter' | 'Blackjack'


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

    return <ProvideUser value={user}>
        <ProvideTheme value={theme}>
            <div  style={{margin: '1rem'}}>
                <div style={{display: 'flex'}}>
                    <button onClick={() => onPageChange('Page1')} style={{color: pageName === 'Page1' ? 'blue' : ''}}>Page 1</button>
                    <button onClick={() => onPageChange('Page2')} style={{color: pageName === 'Page2' ? 'blue' : ''}}>Page 2</button>
                    <button onClick={() => onPageChange('Lists')} style={{color: pageName === 'Lists' ? 'blue' : ''}}>Lists</button>
                    <button onClick={() => onPageChange('ListWithArrow')} style={{color: pageName === 'ListWithArrow' ? 'blue' : ''}}>ListsWithArrowFunctions</button>
                    <button onClick={() => onPageChange('AppScopeCounter')} style={{color: pageName === 'AppScopeCounter' ? 'blue' : ''}}>AppScopeCounter</button>
                    <button onClick={() => onPageChange('Blackjack')} style={{color: pageName === 'Blackjack' ? 'blue' : ''}}>Blackjack</button>
                </div>

                {pageName === 'Page1' && <Page1/>}
                {pageName === 'Page2' && <Page2/>}
                {pageName === 'Lists' && <ListsPage people={people}/>}
                {pageName === 'ListWithArrow' && <ListsWithArrowPage people={people}/>}
                {pageName === 'AppScopeCounter' && <StatelessCounterPage count={appScopeCount} up={up}/>}
                {pageName === 'Blackjack' && <BlackjackVu/>}
            </div>
        </ProvideTheme>
    </ProvideUser>;


}

function MyButton(props: { pageName: PageName, selectedPageName: PageName, onPageClick: (pageName: PageName) => void }) {

    const onPageClickInternal = () => {
        props.onPageClick(props.pageName);
    };

    return <button onClick={onPageClickInternal} style={{color: props.pageName === props.selectedPageName ? 'blue' : ''}}>Page 1</button>;
}











