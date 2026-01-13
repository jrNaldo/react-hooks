import { useState } from "react"
import useCounter from "./useCounter"

export default function CustomHooks2() {
    const {count, increment, reset} = useCounter({initialCounter: 10})
    return (
        <div style={{padding: '1rem'}}>
            <h2>Custom Hooks</h2>
            <div style={{display: 'flex', gap: '1rem'}}>
                <button style={{backgroundColor: 'white', width: '50px', aspectRatio: '1'}} onClick={increment}>
                    {count}
                </button>

                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}