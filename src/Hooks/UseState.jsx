import { useState } from "react";

export default function UseState(props){
    const [name, setName] = useState('Matheus')
    const [nameInput, setNameInput] = useState('Carla')
    const validationName = name === 'Matheus' ? true : false

    const [number, setNumber] = useState(1)

    return (
        <div>
            <h2>UseState</h2>

            <div>
                <p>Nome: {name}</p>
                <input type="text" readOnly value={name}/>
                <button 
                    onClick={() => setName(validationName ? 'Pereira': 'Matheus')} 
                    style={{display: 'block', padding: '0.5rem 1rem', marginTop: '0.5rem', cursor: 'pointer'}}
                >
                    Trocar nome
                </button>
            </div>

            <div>
                <p>Number: {number}</p>
                <button 
                    onClick={() => setNumber(prevState => prevState + 1)}
                    style={{display: 'block', padding: '0.5rem 1rem', marginTop: '0.5rem', cursor: 'pointer'}}
                >
                    Mudar Numero
                </button>
            </div>

            <div>
                <p>{nameInput}</p>
                <input type="text" value={nameInput} onChange={e => setNameInput(e.target.value)} />
            </div>
        </div>
    )
}