import React from 'react';

export function ListsWithArrowPage({people}: { people: Array<string> }) {

    return <div>
        <h1>Lists with Arrow functions</h1>
        <ul>
            {people.map(personName => <li>{personName}</li>)}
        </ul>
    </div>;

}