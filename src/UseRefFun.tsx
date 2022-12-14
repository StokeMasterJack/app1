import {useState} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import {VGap} from './RLayout';
import {Co} from './RLayout';
import {VF} from './util';


/*
state (like the M in MVC): state updates trigger a rerender
ref: does not trigger a rerender and has a lifetime of the component
*/


export const FocusInput = (props: any) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        inputRef.current?.focus();
    });


    return <Co>
        <input ref={inputRef} style={{fontWeight: 'bold'}} {...props} />
    </Co>;
};

export const useInterval = (t: number, f: VF) => {
    const intervalIdRef = useRef<number | null>(5);

    useEffect(() => {
        intervalIdRef.current = window.setInterval(() => {
            f();
        }, t);


        return () => {
            if (intervalIdRef.current !== null) {
                window.clearInterval(intervalIdRef.current);
            }
        };
    });


};

export function UseRefFun() {
    const [count, setCount] = useState(1);
    const [aa, setAa] = useState('');
    useInterval(1000, () => setCount(prev => prev + 1));

    // useInterval(1000, () => setCount(count + 1));
    return <Co style={{width:'20rem'}}>
        <h1>Fun with useRef hook</h1>
        <input/><VGap/>
        <input/><VGap/>
        <input/><VGap/>
        <FocusInput value={aa} onChange={(e: any) => setAa(e.target.value)}/><VGap/>
        <input/><VGap/>
        <input/><VGap/>
        <input/><VGap/>
        <VGap/><VGap/>
        Interval Count: {count}<VGap/>
    </Co>;
}

export function UseRefFunOld() {

    const intervalIdRef = useRef<number | null>(5);
    const [count, setCount] = useState(1);

    useEffect(() => {
        intervalIdRef.current = window.setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);


        return () => {
            if (intervalIdRef.current !== null) {
                console.log('UseRefFun unmount');
                window.clearInterval(intervalIdRef.current);
            }
        };
    });

    return <Co>
        count: {count}
    </Co>;

}

