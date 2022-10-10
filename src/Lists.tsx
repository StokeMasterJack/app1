export function Lists({height, width}: { height: number, width: number }) {
    const xxx = `Foo ${height}`;


    const a = [1, 2, 3, 7];

    function mappingFunctionA(x: number): number {
        return x * 2;
    }

    function mappingFunctionB(x: number) {
        return <li>{x}</li>;
    }

    const aa = a.map(mappingFunctionA);  //2,4,6,14

    const bb = <ul>{a.map(mappingFunctionB)}</ul>;  //<li>1</li><li>2</li><li>3</li><li>7</li>

    const cc = 7 > 8 ? '111' : '222';


    return <div>
        <div style={{backgroundColor: 'red', width: `${width}rem`, height}}></div>
        {bb}
    </div>;
}


