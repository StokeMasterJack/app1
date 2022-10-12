// noinspection JSIgnoredPromiseFromCall,UnreachableCodeJS

import axios from 'axios';
import {useState} from 'react';
import React from 'react';
import {statusList} from './po/PosPage';
import {Po} from './po/PosPage';
import {HGap} from './RLayout';
import {Ro} from './RLayout';
import {Co} from './RLayout';


export function PosWithClassComponent() {
    const [status, setStatus] = useState('');


    const onStatusChange = (e: any) => {
        setStatus(e.target.value);
    };
    return <Co>
        <h1>Pos with a class-based (old-school) component</h1>
        <Ro style={{alignItems: 'center', height: '2rem', margin: '1rem'}}>
            <Ro>Status: </Ro>
            <HGap/>
            <select value={status} onChange={onStatusChange}>
                {statusList.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
        </Ro>


        <PosOld status={status}/>
    </Co>;

}


interface Props {
    status: string;
}

interface State {
    pos: Array<Po>;
}

export class PosOld extends React.Component<Props, State> {

    mounted: boolean = false;  //semi-similar to ref

    constructor(props: Props) {
        super(props);

        this.state = {
            pos: []
        };
    }


    //this would be handled in useEffect with a deps: []
    componentDidMount() {
        this.mounted = true;
        this.fetchPos(this.props.status);
    }

    //this would be handled in useEffect with a dep: [props.status]
    componentWillReceiveProps(nextProps: Props) {
        const oldStatus = this.props.status;
        const nextStatus = nextProps.status;
        if (nextStatus !== oldStatus) {
            this.fetchPos(nextStatus);
        }
    }

    //this would be handled in the return value (a cleanup function) of useEffect with a deps: []
    componentWillUnmount() {
        this.mounted = false;
    }

    fetchPos = async (status: string) => {
        const axiosResponse = await axios.get(`/pos.json?status=${status}`);
        if (this.mounted) {
            this.setState({pos: axiosResponse.data});
        }
    };


    render() {
        return <Co>
            <style>{`
                td{border: 1px solid black}
                th{border: 1px solid black}
            `}
            </style>
            <table style={{borderCollapse: 'collapse',}}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>status</th>
                    <th>vendorId</th>
                    <th>vendorName</th>
                    <th>requestDate</th>
                </tr>
                </thead>
                <tbody>
                {this.state.pos.map(po => <tr key={po.id}>
                    <td>{po.id}</td>
                    <td>{po.status}</td>
                    <td>{po.vendorId}</td>
                    <td>{po.vendorName}</td>
                    <td>{po.requestDate}</td>
                </tr>)}
                </tbody>
            </table>
        </Co>;
    }
}
