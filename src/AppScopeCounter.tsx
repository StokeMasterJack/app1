import React from 'react';
import {Co} from './RLayout';
import {StatelessCounter} from './StatelessCounter';

export const AppScopeCounter = (props: { count: number, up: () => void }) => {
    return <Co>
        <h1>AppScopeCounter</h1>
        <StatelessCounter count={props.count} up={props.up}/>
    </Co>;
};