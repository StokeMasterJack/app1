import {VF} from './util';

export function StatelessCounter({count, up}: { count: number, up: VF} ) {
    return <p>
        <button onClick={up}>Up</button>
        Count {count}
    </p>;
}