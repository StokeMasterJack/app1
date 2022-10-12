import React from 'react';
import {FooInner} from './HO';
import {Outer} from './HO';
import {myInner} from './HO';

export function Page2() {

    return <div>
        <h1>Page 2</h1>
        <p>Page 2</p>
        <div>{}</div>
        <Outer inner={myInner} Foo={FooInner}/>
    </div>;
}