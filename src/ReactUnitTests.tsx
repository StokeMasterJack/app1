import React from 'react';
import {Co} from './RLayout';


export function ReactUnitTests() {

    return <Co>
        <style>
            {`
            tr td:first-child {
                width: 12rem
            }
            tr td:nth-child(2) {
                width: 20rem
            }
            td {
                border: 1px solid black;
                padding: 5px;
            }
            th {
                border: 1px solid black;
                padding: 5px;
            }
            `}
        </style>
        <h1>React Unit Tests</h1>
        <p>Be sure to checkout the TypeScript and React unit tests for the Blackjack project in src/blackjack directory</p>

        <table style={{borderCollapse: 'collapse',marginLeft:0,marginRight:'auto'}}>
            <tbody>
            <tr>
                <th>Test</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>blackjack.test.ts</td>
                <td>Unit test of the core business logic in the model classes: <b>Game</b>,  <b>Hand</b>, <b>Deck</b>, <b>Card</b></td>
            </tr>
            <tr>
                <td>HandVu.test.tsx</td>
                <td>Unit test of stateless view (aka presenter) component:  <b>HandVu</b></td>
            </tr>
            <tr>
                <td>BlackjackVu.test.tsx</td>
                <td>Unit test of stateless view (aka presenter) component:  <b>BlackjackVu</b></td>
            </tr>
            <tr>
                <td>Blackjack.test.tsx</td>
                <td>Unit test of stateful controller (aka container) component:  <b>Blackjack</b></td>
            </tr>
            </tbody>
        </table>

    </Co>;
}