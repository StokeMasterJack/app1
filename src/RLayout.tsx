import * as React from 'react';
import {FunctionComponent} from 'react';


export type  DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;


export const Ro: FunctionComponent<DivProps> = (userProps: DivProps) => {
    const userStyles: React.CSSProperties | undefined = userProps.style;
    const addedStyles: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row'
    };
    const fixedStyles: React.CSSProperties = !userStyles ? {...addedStyles} : {...userStyles, ...addedStyles};
    const fixedProps = {...userProps, style: fixedStyles};
    return <div {...fixedProps} />;
};

export const Co: FunctionComponent<DivProps> = (userProps: DivProps) => {
    const userStyles: React.CSSProperties | undefined = userProps.style;
    const addedStyles: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column'
    };
    const fixedStyles: React.CSSProperties = !userStyles ? {...addedStyles} : {...userStyles, ...addedStyles};
    const fixedProps = {...userProps, style: fixedStyles};
    return <div {...fixedProps} />;
};

export const Gr: FunctionComponent<DivProps> = (userProps: DivProps) => {
    const userStyles: React.CSSProperties | undefined = userProps.style;
    const addedStyles: React.CSSProperties = {
        display: 'grid',
    };
    const fixedStyles: React.CSSProperties = !userStyles ? {...addedStyles} : {...userStyles, ...addedStyles};
    const fixedProps = {...userProps, style: fixedStyles};
    return <div {...fixedProps} />;
};
