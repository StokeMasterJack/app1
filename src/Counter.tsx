import {useState} from 'react';
import {VGap} from './RLayout';
import {Ro} from './RLayout';
import {Co} from './RLayout';
import {useTheme} from './ThemeContext';
import {useUser} from './UserContext';

export function Counter() {

    const [count, setCount] = useState<number>(5);

    function up() {
        setCount(prev => prev + 1);
        // setCount(count + 1);
    }


    const user = useUser();

    const theme = useTheme();

    return <Co style={{backgroundColor:'lightgray',padding:'1rem',margin:'1rem',marginLeft:'0rem',width:'20rem'}}>
        <button onClick={up}>Up</button>
        <VGap/>
        <Ro>Count {count}</Ro><VGap/>
        <Ro>Theme Color: {theme.color}</Ro>
        <VGap/>
        <Ro> User lastName: {user.ln}</Ro>
    </Co>;
}