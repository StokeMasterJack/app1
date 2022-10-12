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
        <Ro style={{alignItems:'center',height:'2rem',margin:'1rem'}}>
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


    componentDidMount() {
        this.mounted = true;
        this.fetchPos(this.props.status);
    }

    componentWillReceiveProps(nextProps: Props) {
        const oldStatus = this.props.status;
        const nextStatus = nextProps.status;
        if (nextStatus !== oldStatus) {
            this.fetchPos(nextStatus);
        }
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    // fetchPosInternal = () => {
    //     this.fetchPos(this.props.status);
    // };

    fetchPos = async (status: string) => {
        const axiosResponse = await axios.get(`/pos.json?status=${status}`);
        if (this.mounted) {
            this.setState({pos: axiosResponse.data});
        }
    };


    render() {
        return <Co>

            <table>
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
