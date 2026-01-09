import { useState, useRef, useEffect } from "react"

export default function UseRef(){
    const [text, setText] = useState('')
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [input3, setInput3] = useState('')
    const count = useRef(0)
    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const inputRef3 = useRef()

    useEffect(function(){
        count.current = count.current + 1
    }, [text])

    useEffect(() => {
        if(input2.length == 3){
            inputRef3.current?.focus()
        }
    }, [input2])

    useEffect(() => {
        if(input1.length === 3){
            inputRef2.current?.focus()
        }
    }, [input1])

    return (
        <div>
            <h2>UseRef</h2>
            <div>
                <span>Valor: {text} [</span>
                <span>{count.current}]</span>
            </div>

            <input type="text" value={text} onChange={e => setText(e.target.value)}/>


            <form action="">
                <input 
                    type="number" 
                    placeholder="Senha 1" 
                    maxLength={3}
                    ref={inputRef1} 
                    value={input1} 
                    onChange={e => setInput1(e.target.value)}
                /><br />

                <input 
                    type="number" 
                    placeholder="Senha 2"
                    maxLength={3} 
                    ref={inputRef2} 
                    value={input2} 
                    onChange={e => setInput2(e.target.value)}
                /><br />

                <input 
                    type="number" 
                    placeholder="Senha 3" 
                    maxLength={3}
                    ref={inputRef3} 
                    value={input3} 
                    onChange={e => setInput3(e.target.value)}
                />
            </form>
        </div>
    )
}