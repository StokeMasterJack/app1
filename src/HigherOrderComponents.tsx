import React from 'react';
import {FooInner} from './HO';
import {myInner} from './HO';
import {Outer} from './HO';

export function HigherOrderComponents() {
    return <div>
        <h1>Higher Order Components (HO) and render functions</h1>
        <Outer inner={myInner} Foo={FooInner}/>
    </div>;
}