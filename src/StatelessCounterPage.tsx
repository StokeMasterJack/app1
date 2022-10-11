import React from 'react';
import {StatelessCounter} from './StatelessCounter';

export const StatelessCounterPage = (props: { count: number, up: () => void }) => {
    return <StatelessCounter count={props.count} up={props.up}/>;
};