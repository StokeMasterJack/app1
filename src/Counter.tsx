import {useContext} from 'react';
import {useState} from 'react';
import {UserContext} from './App1';
import {useTheme} from './ContextVars';

export function Counter() {

    const [count, setCount] = useState<number>(5);

    function up() {
        setCount(count + 1);
    }


    const user = useContext(UserContext);
    console.log('user: ', user?.ln);

    const theme = useTheme();

    // if(x === null){
    //     return "Loading"
    // }

    return <p>
        <button onClick={up}>Up</button>
        Count {count}
        Theme Color: {theme.color}
    </p>;
}