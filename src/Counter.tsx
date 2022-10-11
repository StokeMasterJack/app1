import {useState} from 'react';
import {useTheme} from './ThemeContext';
import {useUser} from './UserContext';

export function Counter() {

    const [count, setCount] = useState<number>(5);

    function up() {
        setCount(count + 1);
    }


    const user = useUser();
    console.log('user: ', user.ln);

    const theme = useTheme();
    console.log('theme: ', theme.color);
    // if(x === null){
    //     return "Loading"
    // }

    return <p>
        <button onClick={up}>Up</button>
        Count {count}
        Theme Color: {theme.color}
    </p>;
}