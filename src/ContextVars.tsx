import {useContext} from 'react';
import {createContext} from 'react';

export interface Theme {
    color: 'blue';
}

export const ThemeContext = createContext<Theme | null>(null);


export const useTheme = (): Theme => {
    const t = useContext(ThemeContext);
    if (t === null) {
        throw Error('Not Logged In');
    }
    return t;
};


export const ProvideTheme = ({value, children}: { value: Theme | null, children: any }) => {

    return <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>;

};