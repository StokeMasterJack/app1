import axios from 'axios';
import {useEffect} from 'react';
import {useState} from 'react';
import {VGap} from '../RLayout';
import {HGap} from '../RLayout';
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

export interface Vendor {
    id: number;
    name: string;
}

const statusList = ['', 'Draft', 'Pending', 'Approved', 'Open', 'Complete', 'Canceled'];

const sortVendorsFunction = (a: Vendor, b: Vendor): number => {
    const aa = a.name ?? '';
    const bb = b.name ?? '';
    return aa.localeCompare(bb);
}

export function PosPage() {

    console.log('PosPage render');

    const [pos, setPos] = useState<Array<Po>>([]);
    const [vendors, setVendors] = useState<Array<Vendor>>([]);
    const [vendorId, setVendorId] = useState<string>('');
    const [status, setStatus] = useState<string>('');

    useEffect(() => {

        const getPos = async () => {
            const axiosResponse = await axios.get<Array<Po>>(`/pos.json?vendorId=${vendorId}&status=${status}`);
            const posResult = axiosResponse.data;
            setPos(posResult);
        };

        getPos();

    }, [vendorId, status]);

    useEffect(() => {

        const getVendors = async () => {
            const axiosResponse = await axios.get<Array<Vendor>>(`/vendors.json`);
            const vendorsResult = axiosResponse.data;
            vendorsResult.sort(sortVendorsFunction)
            setVendors(vendorsResult);
        };

        getVendors();

    }, []);

    const onVendorIdChange = (event: any) => {
        const value = event.target.value;
        setVendorId(value);
    };

    const onStatusChange = (event: any) => {
        const value = event.target.value;
        setStatus(value);
    };

    return <div>
        <VGap/>
        <VGap/>
        <Co>
            <Ro>
                <div>Vendor id</div>
                <HGap/>

                <input value={vendorId} onChange={onVendorIdChange}/>
                <HGap/>
                <select value={vendorId} onChange={onVendorIdChange}>
                    <option value={''}></option>
                    {vendors.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
                </select>

            </Ro>
            <VGap/>
            <Ro>
                <div>Status</div>
                <HGap/>
                <input value={status} onChange={onStatusChange}/>
                <HGap/>
                <select value={status} onChange={onStatusChange}>
                    {statusList.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
            </Ro>
            <VGap/>
            <VGap/>
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