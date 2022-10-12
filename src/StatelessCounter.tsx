import {HGap} from './RLayout';
import {Ro} from './RLayout';
import {VF} from './util';

export function StatelessCounter({count, up}: { count: number, up: VF} ) {
    return <Ro style={{alignItems:'center'}}>
        <button onClick={up}>Up</button>
        <HGap/>
        <Ro>Count {count}</Ro>
    </Ro>;
}