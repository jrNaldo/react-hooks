import { useEffect, useRef, useState } from "react";

export default function UseEffect(props) {
    const [count, setCount] = useState(1)
    const [segundos, setSegundos] = useState(0)
    const [ativo, setAtivo] = useState(0)
    const [user, setUser] = useState()

    useEffect(() => {
        console.log('Roda a cada renderização')
    })

    // Clean up function
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(`Contador foi alterado ${count} vezes`)
        }, 2000)

        return () => { // Serve para arrumar problemas de memória
            clearTimeout(timer)
        }
    }, [count])

    useEffect(() => {
       let interval

       if(ativo){
            interval = setInterval(() => {
                setSegundos(s => s + 1)
            }, 1000)
       }

       return () => {
            if(interval) clearInterval(interval)
       }
    }, [ativo])

    useEffect(() => {
        document.title = `Sessão: ${segundos}s`
    }, [segundos])

    return (
        <div>
            <h2>UseEffect</h2>
            <div>
                <p>{count}</p>
                <button 
                    style={{display: 'block', padding: '0.5rem 1rem', marginTop: '0.5rem', cursor:'pointer',marginBottom: '1rem'}}      
                    onClick={() => setCount(prev => prev + 1)}
                >
                    Renderizar
                </button>

            </div>

            {user && ( // Se não fazer isso, a pag carrega sem fazer o fetch da api
                <div>
                    <h3>Nome: {user.name}</h3>
                    <p>{user.login}</p>
                </div>
            )}

            <div>
                <p>Segundos: {segundos}</p>
                <button 
                    style={{display: 'block', padding: '0.5rem 1rem', marginTop: '0.5rem', cursor: 'pointer'}}
                    onClick={() => setAtivo(!ativo)}
                >
                    {ativo ? 'Parar Cronometro': 'Continuar Cronometro'}
                </button>
            </div>
        </div>
    )
}