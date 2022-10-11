import {useContext} from 'react';
import {createContext} from 'react';

export interface User {
    readonly fn: string;
    readonly ln: string;
}

export const UserContext = createContext<User | null>(null);

export const useUser = (): User => {
    const u = useContext(UserContext);
    if (u === null) {
        throw Error('Not Logged In');
    }
    return u;
};

export const ProvideUser = ({value, children}: { value: User | null, children: any }) => {
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>;
};