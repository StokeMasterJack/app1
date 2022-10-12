//Higher order-components
// noinspection JSUnusedGlobalSymbols

export function Outer({inner, Foo}: { inner: () => any, Foo: any }) {
    return <div style={{backgroundColor: 'yellow', padding: '1rem'}}>
        {inner()}
        <Foo/>
    </div>;
}


export function myInner(): React.ReactNode {
    return <input/>;
}


export function FooInner() {
    return <input/>;
}

export function Main() {
    return <Outer inner={myInner} Foo={FooInner}/>;
}