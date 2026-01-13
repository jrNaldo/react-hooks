import { useState } from "react"
import useCounter from "./useCounter"

export default function CustomHooks() {
    const {count, increment, decrement, reset} = useCounter()
    return (
        <div style={{padding: '1rem'}}>
            <h2>Custom Hooks</h2>
            <p>{count}</p>
            <div style={{display: 'flex', gap: '1rem'}}>
                <button onClick={increment}>Somar + 1</button>
                <button onClick={decrement}>Subtrair - 1</button>
                
                <button onClick={reset}>Limpar</button>
            </div>
        </div>
    )
}