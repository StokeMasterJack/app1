import {useContext} from 'react';
import {createContext} from 'react';

export interface Theme {
    color: string;
}

export const ThemeContext = createContext<Theme>({color: 'blue'});

export const useTheme = (): Theme => {
    return useContext(ThemeContext);
};

export const ProvideTheme = ({value, children}: { value: Theme, children: any }) => {

    return <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>;

};