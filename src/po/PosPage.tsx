import axios from 'axios';
import {useEffect} from 'react';
import {useState} from 'react';
import {Ro} from '../RLayout';
import {Co} from '../RLayout';

/*
    "id": 1334,
        "requestDate": "2022-08-25",
        "vendorId": 426,
        "vendorName": "Sumitomo Plastics Machinery",
        "status": "Complete"
 */
export interface Po {
    readonly id: number;
    readonly requestDate: string;
    readonly vendorId: number;
    readonly vendorName: string;
    readonly status: string;
}

export function PosPage() {

    console.log("PosPage render");

    const [pos, setPos] = useState<Array<Po>>([]);
    const [vendorId, setVendorId] = useState<string>('');

    useEffect(() => {

        const getPos = async () => {
            const axiosResponse = await axios.get<Array<Po>>(`/pos.json?vendorId=${vendorId}`);
            const posResult = axiosResponse.data;
            setPos(posResult);
        };

        // const getPos1 =  () => {
        //     axios.get<Array<Po>>('/pos.json').then(()=>{
        //
        //     })
        //     const posResult = axiosResponse.data;
        //     setPos(posResult);
        // };

        getPos();

    }, [vendorId]);

    const onVendorIdChange = (event: any) => {
        const value = event.target.value;
        setVendorId(value);
    };

    return <div>
        <Co>
            <Ro>
                <div>Vendor id</div>
                <input value={vendorId} onChange={onVendorIdChange}/></Ro>
        </Co>
        <table>
            <tbody>
            {pos.map(po => <tr key={po.id}>
                <td>{po.id}</td>
                <td>{po.status}</td>
                <td>{po.vendorId}</td>
                <td>{po.vendorName}</td>
                <td>{po.requestDate}</td>
            </tr>)}
            </tbody>
        </table>

    </div>;


}