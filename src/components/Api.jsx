import { useEffect, useRef, useState } from "react"

export default function Api() {
    const [text, setText] = useState('')
    const [data, setData] = useState([])
    const chamadaApi = useRef()

    const fetchApi = () => {
        fetch(`https://rickandmortyapi.com/api/character/?name=${text}`)
            .then(resp => resp.json())
            .then(data => setData(data.results))
    }
    console.log(data)

    useEffect(() => {
        if(chamadaApi.current) clearTimeout(chamadaApi.current)

        chamadaApi.current = setTimeout(fetchApi, 1000)

        return () => {
            clearTimeout(chamadaApi.current)
        }
    }, [text])
    return (
        <form action="">
            <label>Requisição Api(Rick and Morty): </label>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>

            {data && (
                <ul>
                    {data.map(d => (
                        <li key={d.id}>{d.name} - {d.origin.name} </li>
                    ))}
                </ul>
            )}
        </form>
    )
}