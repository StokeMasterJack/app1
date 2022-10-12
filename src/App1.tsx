/* eslint-disable @typescript-eslint/no-unused-vars */
// noinspection JSUnusedLocalSymbols

import {useState} from 'react';
import React from 'react';
import {Blackjack} from './blackjack/Blackjack';
import {ErrorBoundaryDemo} from './ErrorBoundaryDemo';
import {HigherOrderComponents} from './HigherOrderComponents';
import {ListsPage} from './ListsPage';
import {ListsWithArrowPage} from './ListsWithArrowPage';
import {Page1} from './Page1';
import {Page2} from './Page2';
import {PosPage} from './po/PosPage';
import {PosWithClassComponent} from './PosWithClassComponent';
import {ReactUnitTests} from './ReactUnitTests';
import {Ro} from './RLayout';
import {Co} from './RLayout';
import {AppScopeCounter} from './AppScopeCounter';
import {ProvideTheme} from './ThemeContext';
import {Theme} from './ThemeContext';
import {User} from './UserContext';
import {ProvideUser} from './UserContext';
import {UseRefFun} from './UseRefFun';
import {spaRedir} from './util';

export type PageName =
    | 'Page1'
    | 'Page2'
    | 'Lists'
    | 'ListWithArrow'
    | 'AppScopeCounter'
    | 'Blackjack'
    | 'Pos'
    | 'UseRefFun'
    | 'PosWithClassComponent'
    | 'EnvVars'
    | 'HigherOrderComponents'
    | 'ErrorBoundaryDemo'
    | 'ReactUnitTests';


//use arrows function when passing functions
export function App1() {

    const pageName = window.location.pathname.replace('/', '');

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


    return <ProvideUser value={user}>
        <ProvideTheme value={theme}>
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
                    <button onClick={() => onPageChange('PosWithClassComponent')} style={{color: pageName === 'PosWithClassComponent' ? 'blue' : ''}}>PosWithClassComponent</button>
                    <button onClick={() => onPageChange('EnvVars')} style={{color: pageName === 'EnvVars' ? 'blue' : ''}}>EnvVars</button>
                    <button onClick={() => onPageChange('HigherOrderComponents')} style={{color: pageName === 'HigherOrderComponents' ? 'blue' : ''}}>HigherOrderComponents</button>
                    <button onClick={() => onPageChange('ErrorBoundaryDemo')} style={{color: pageName === 'ErrorBoundaryDemo' ? 'blue' : ''}}>ErrorBoundaryDemo</button>
                    <button onClick={() => onPageChange('ReactUnitTests')} style={{color: pageName === 'ReactUnitTests' ? 'blue' : ''}}>ReactUnitTests</button>
                </div>

                <Co style={{padding: '1rem'}}>
                    {pageName === 'Page1' && <Page1/>}
                    {pageName === 'Page2' && <Page2/>}
                    {pageName === 'Lists' && <ListsPage people={people}/>}
                    {pageName === 'ListWithArrow' && <ListsWithArrowPage people={people}/>}
                    {pageName === 'AppScopeCounter' && <AppScopeCounter count={appScopeCount} up={up}/>}
                    {pageName === 'Blackjack' && <Blackjack/>}
                    {pageName === 'Pos' && <PosPage/>}
                    {pageName === 'UseRefFun' && <UseRefFun/>}
                    {pageName === 'PosWithClassComponent' && <PosWithClassComponent/>}
                    {pageName === 'EnvVars' && <EnvVars/>}
                    {pageName === 'HigherOrderComponents' && <HigherOrderComponents/>}
                    {pageName === 'ErrorBoundaryDemo' && <ErrorBoundaryDemo/>}
                    {pageName === 'ReactUnitTests' && <ReactUnitTests/>}
                </Co>
            </div>
        </ProvideTheme>
    </ProvideUser>;


}

export const EnvVars = () => {
    return <Co>
        <h1>EnvVars</h1>
        <h2>  See these files:</h2>
        <Co style={{paddingLeft: '1rem'}}>
            <Ro><code>.env</code></Ro>
            <Ro><code>.env.development</code></Ro>
            <Ro><code>.env.production</code></Ro>
        </Co>

        <h2>Var Values</h2>
        <div>REACT_APP_NOT_SECRET_CODE: {process.env.REACT_APP_NOT_SECRET_CODE}</div>
        <div>REACT_APP_FOO: {process.env.REACT_APP_FOO}</div>
        <div>REACT_APP_PROD: {process.env.REACT_APP_PROD}</div>
    </Co>;
};

function MyButton(props: { pageName: PageName, selectedPageName: PageName, onPageClick: (pageName: PageName) => void }) {

    const onPageClickInternal = () => {
        props.onPageClick(props.pageName);
    };

    return <button onClick={onPageClickInternal} style={{color: props.pageName === props.selectedPageName ? 'blue' : ''}}>Page 1</button>;
}











