import { useState } from 'react'

export default function Counter() {
    const [count, setCount ] = useState(0)
    return (
        <>
            <h1>Counter:{count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </>
    )
}