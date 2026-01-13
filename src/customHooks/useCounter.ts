import { useState } from "react";

type Props = {
    initialCounter?: number
}

export default function useCounter ({initialCounter = 0}: Props = {}) {
    const [count,setCount] = useState(initialCounter)

    const increment = () => {
        setCount((prev) => prev + 1)
    }

    const decrement = () => {
        setCount((prev) => prev - 1)
    }

    const reset = () => {
        if(count === 0){
            alert('Ops, o contador ja esta zerado')
            return
        }
        setCount(0)
    }

    return {
        count, increment, decrement, reset
    }
}