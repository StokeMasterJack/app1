import React from 'react';
import {VGap} from './RLayout';

export function ListsPage({people}: { people: Array<string> }) {

    function mappingFunction(personName: string) {
        return <li key={personName}>{personName}</li>;
    }

    return <div>
        <h1>Lists and Conditional Rendering</h1>
        <ul>
            {people.map(mappingFunction)}
        </ul>

        <VGap/>
        <VGap/>

        {3 > 5 ? <div>3 is gt 5</div> : <div>3 is NOT gt 5</div>}
    </div>;
}