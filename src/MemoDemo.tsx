import {useCallback} from 'react';
import {useMemo} from 'react';
import {memo} from 'react';
import {useState} from 'react';
import {Co} from './RLayout';
import {VF} from './util';

function compute(x: number): number {
    return x + x;
}

function MemoDemo() {
    const [count, setCount] = useState(1);

    // const computedValue = compute(count);

    const computedValue = useMemo(() => {
        return compute(count);
    }, [count]);

    const onSelect = useCallback(() => {
        console.log('onSelect',count);
    },[count]);

    return <Co>
        {count}
        {computedValue}
        <Box1 h={10} w={10} onSelect={onSelect} />
    </Co>;
}


interface BoxProps {
    h: number;
    w: number;
    onSelect: VF;
}

// function Box1({h, w}: BoxProps) {
//
//     return <div style={{width: w, height: h}}></div>;
//
// }

const Box1 = memo(({h, w, onSelect}: BoxProps) => {
    return <div style={{width: w, height: h}}></div>;
});

function BoxInternal({h, w}: BoxProps) {
    return <div style={{width: w, height: h}}></div>;
}

const Box = memo(BoxInternal);