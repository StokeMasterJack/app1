import React from 'react';

export function ListsPage({people}: { people: Array<string> }) {

    function mappingFunction(personName: string) {
        return <li key={personName}>{personName}</li>;
    }

    return <div>
        <h1>Lists</h1>
        <ul>
            {people.map(mappingFunction)}
        </ul>
    </div>;
}