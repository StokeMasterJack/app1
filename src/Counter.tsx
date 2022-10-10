import {useState} from 'react';

export function Counter() {

    const [count,setCount] = useState<number>(5)

    function up(){
        setCount(count + 1)
    }

    return <p>
        <button onClick={up} >Up</button>
        Count {count}
    </p>;
}