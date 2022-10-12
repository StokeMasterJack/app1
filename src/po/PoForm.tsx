import axios from 'axios';
import {useEffect} from 'react';
import {useState} from 'react';
import {Co} from '../RLayout';
import {VGap} from '../RLayout';
import {Ro} from '../RLayout';
import {Po} from './PosPage';


function blankPo(): Po {
    return {id: '', requestDate: '', vendorId: '', vendorName: '', status: ''};
}

export function PoForm({id, onChange}: { id: string | null, onChange: (po: Po) => void }) {

    const [po, setPo] = useState<Po>(blankPo);

    useEffect(() => {
        const getPo = async () => {
            if (id) {
                const axiosResponse = await axios.get<Po>(`/po.json?id=${id}`);
                setPo(axiosResponse.data);
            } else {
                setPo(blankPo());
            }
        };

        getPo();
    }, [id]);

    const onSave = async () => {
        await axios.put('/po.json', po);
        onChange(po);
    };
    const onCh = (event: any) => {
        const n = event.target.name;
        const v = event.target.value;
        setPo({...po, [n]: v});
    };

    return <Co style={{backgroundColor: '', justifyContent: 'flex-start'}}>
        <Co style={{backgroundColor: 'lightgray', margin: '1rem', padding: '1rem'}}>
            <Ro>
                <div style={{width: '10rem'}}>ID:</div>
                <input name="id" value={po.id ? po.id : 'New'} readOnly={true}/>
            </Ro>
            <VGap/>
            <Ro>
                <div style={{width: '10rem'}}>Request Date:</div>
                <input name="requestDate" value={po.requestDate} onChange={onCh}/>
            </Ro>
            <VGap/>
            <Ro>
                <div style={{width: '10rem'}}>VendorId:</div>
                <input name="vendorId" value={po.vendorId} onChange={onCh}/>
            </Ro>
            <VGap/>
            <Ro>
                <div style={{width: '10rem'}}>Vendor Name:</div>
                <input name="vendorName" value={po.vendorName} readOnly={true}/>
            </Ro>
            <VGap/>
            <Ro>
                <div style={{width: '10rem'}}>Status:</div>
                <input name="status" value={po.status} onChange={onCh}/>
            </Ro>
            <VGap/>
            <VGap/>
            <Ro style={{justifyContent: 'center'}}>
                <button onClick={onSave}>Save</button>
            </Ro>
        </Co>
    </Co>;
}

