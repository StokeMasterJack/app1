import React from 'react';

export function Page2() {

    if(3===3){
        throw new Error("foo")
    }

    return <div>
        <h1>Page 2</h1>
        <p>Page 2</p>
        <div>{}</div>
    </div>;
}