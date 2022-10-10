export function StatelessCounter({count, up}: { count: number, up: () => void }) {
    return <p>
        <button onClick={up}>Up</button>
        Count {count}
    </p>;
}