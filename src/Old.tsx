import axios from 'axios';
import {useState} from 'react';
import {useEffect} from 'react';
import React from 'react';
import {Po} from './po/PosPage';

interface Props {
    x: number;
}

interface State {
    y: number;
}

export class Old extends React.Component<Props, State> {

    mounted: boolean = false;  //ref

    constructor(props: Props) {
        super(props);

        this.state = {
            y: 100
        };
    }


    componentDidMount() {
        this.mounted = true;
    }

    componentWillReceiveProps(nextProps: Props) {
        //
    }

    componentWillUnmount() {
        this.mounted = false;
    }



    render() {

        const onClick = () =>{
            this.setState({y: this.state.y + 1})
        }

        return <div>XX: {this.props.x} {this.state.y}
            <button onClick={onClick}>Up</button>
        </div>;
    }
}


function Eqiv(props: Props) {
    const [y, setY] = useState(1);
    const [po, setPo] = useState<Po | null>(null);


    const update = (delta: Partial<Po>) => {
        setPo({...po, ...delta} as Po);
    };

    useEffect(() => {
        // componentDidMount

        let mounted = true;
        const fetch = async () => {
            const axiosResponse = await axios.get('');
            if (mounted) {
                update({status: 'Open'});
                setY(axiosResponse.data);
            }
        };

        return () => {
            //componentWillUnmount
            mounted = false;
        };

    }, []);
}


/*
componentDidMount()

 */