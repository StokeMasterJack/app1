import React from 'react';

function If({x}: { x: number }) {
    return <div>{x > 4 ? <div>aaa</div> : <div>bbb</div>}</div>;
}
