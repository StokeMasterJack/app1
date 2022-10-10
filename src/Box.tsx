export function Box({height, width}: { height: number, width: number }) {


    return <div>
        <div style={{backgroundColor: 'red', width: `${width}rem`, height}}></div>
    </div>;
}


