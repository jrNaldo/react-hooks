import { useId, useReducer, useState } from "react"

const initialState = {
    count: 0
}

const actions = {
    soma: 'soma',
    subtracao: 'subtracao',
    custom: 'custom'
}

function reducer(state, action){
    switch(action.type){
        case actions.soma:
            return {
                count: state.count + 1
            }

        case actions.subtracao:
            return {
                count: state.count - 1
            }

        case actions.custom:
            return {
                count: action.payload
            }
        
        default: 
            return state
    }
}

export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [customCount, setCustomCount] = useState(0)
    const id = useId()

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({type: actions.custom, payload: parseFloat(customCount)})
    }

    return (
        <div>
            <h2>UseReducer</h2>
            <p>{state.count}</p>

            <button 
                onClick={() => dispatch({type: actions.soma})} 
                style={{padding: '0.5rem 2rem', marginRight: '.5rem'}}
            >
                +1
            </button>

            <button 
                onClick={() => dispatch({type: actions.subtracao})} 
                style={{padding: '0.5rem 2rem', marginRight: '.5rem', marginBottom: '.5rem'}}
            >
                -1
            </button>

            <form onSubmit={handleSubmit}>
                <label htmlFor={id}>Mudar Count: </label>
                <input
                    id={id}
                    type="number" 
                    value={customCount} 
                    onChange={e => setCustomCount(e.target.value)}
                />

                <button type="submit">Mudar</button>
            </form>
        </div>
    )
}