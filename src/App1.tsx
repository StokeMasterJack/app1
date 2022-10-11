import {useState} from 'react';
import React from 'react';
import {Blackjack} from './blackjack/BlackjackVu';
import {ErrorBoundary} from './ErrorBoundary';
import {ListsPage} from './ListsPage';
import {ListsWithArrowPage} from './ListsWithArrowPage';
import {Old} from './Old';
import {Page1} from './Page1';
import {Page2} from './Page2';
import {PosPage} from './po/PosPage';
import {StatelessCounterPage} from './StatelessCounterPage';
import {ProvideTheme} from './ThemeContext';
import {Theme} from './ThemeContext';
import {User} from './UserContext';
import {ProvideUser} from './UserContext';
import {UseRefFun} from './UseRefFun';
import {spaRedir} from './util';

export type PageName = 'Page1' | 'Page2' | 'Lists' | 'ListWithArrow' | 'AppScopeCounter' | 'Blackjack' | 'Pos' | 'UseRefFun' | 'Old'


//use arrows function when passing functions
export function App1() {
    // const [pageName, setPageName] = useState<PageName>('Page1');
    const [appScopeCount, setAppScopeCount] = useState(5);
    const [user, setUser] = useState<User | null>({fn: 'dave', ln: 'ford'});
    const [theme, setTheme] = useState<Theme>({color: 'blue'});


    const people = ['Joe', 'Sue', 'Ahmed'];

    const up = () => {
        setAppScopeCount(appScopeCount + 1);
    };

    const onPageChange = (pageName: PageName) => {
        spaRedir({url: pageName});
    };

    const pageName = window.location.pathname.replace('/', '');
    console.log('pageName: ', pageName);

    return <ProvideUser value={user}>
        <ProvideTheme value={theme}>
            <div>{process.env.REACT_APP_NOT_SECRET_CODE}</div>
            <div>{process.env.REACT_APP_FOO}</div>
            <div>{process.env.REACT_APP_PROD}</div>
            <div style={{margin: '1rem'}}>
                <div style={{display: 'flex'}}>
                    <button onClick={() => onPageChange('Page1')} style={{color: pageName === 'Page1' ? 'blue' : ''}}>Page 1</button>
                    <button onClick={() => onPageChange('Page2')} style={{color: pageName === 'Page2' ? 'blue' : ''}}>Page 2</button>
                    <button onClick={() => onPageChange('Lists')} style={{color: pageName === 'Lists' ? 'blue' : ''}}>Lists</button>
                    <button onClick={() => onPageChange('ListWithArrow')} style={{color: pageName === 'ListWithArrow' ? 'blue' : ''}}>ListsWithArrowFunctions</button>
                    <button onClick={() => onPageChange('AppScopeCounter')} style={{color: pageName === 'AppScopeCounter' ? 'blue' : ''}}>AppScopeCounter</button>
                    <button onClick={() => onPageChange('Blackjack')} style={{color: pageName === 'Blackjack' ? 'blue' : ''}}>Blackjack</button>
                    <button onClick={() => onPageChange('Pos')} style={{color: pageName === 'Pos' ? 'blue' : ''}}>Pos</button>
                    <button onClick={() => onPageChange('UseRefFun')} style={{color: pageName === 'UseRefFun' ? 'blue' : ''}}>UseRefFun</button>
                    <button onClick={() => onPageChange('Old')} style={{color: pageName === 'Old' ? 'blue' : ''}}>Old</button>
                </div>

                {pageName === 'Page1' && <Page1/>}
                {pageName === 'Page2' && <ErrorBoundary><Page2/></ErrorBoundary>}
                {pageName === 'Lists' && <ListsPage people={people}/>}
                {pageName === 'ListWithArrow' && <ListsWithArrowPage people={people}/>}
                {pageName === 'AppScopeCounter' && <StatelessCounterPage count={appScopeCount} up={up}/>}
                {pageName === 'Blackjack' && <Blackjack/>}
                {pageName === 'Pos' && <PosPage/>}
                {pageName === 'UseRefFun' && <UseRefFun/>}
                {pageName === 'Old' && <Old x = {20} />}
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











