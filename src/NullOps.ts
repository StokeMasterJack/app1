//similar null ops in other languages: kotlin, dart/flutter

/*

x!              null assertion operator. Casts type of x from converts (string | null) to just string
x?.foo          forgives if x is null or undefined. Instead of crashing, returns undefined for the entire expression
x ?? 'Open'     if is null or undefined, 'Open' is returned

 */
import {Po} from './po/PosPage';

// NullOps1 and NullOp2 are equivalent

export function NullOps1(po: Po | null): string {
    if (po !== null) {
        return po.status;
    } else {
        return 'Open';
    }
}

export const NullOp2 = (po: Po | null) => po?.status ?? 'Open';
