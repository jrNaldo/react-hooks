import { useContext, useReducer, useRef, useState } from "react"
import { ThemeContext } from "../context/Theme_Context"
import { FaTrash } from "react-icons/fa"

const initialState = [{
    id: 1,
    text: 'Tarefa 1', 
    completed: false
}]

const actions = {
    addTodo: 'addTodo',
    toggleTodo: 'toggleTodo',
    removeTodo: 'removeTodo'
}

function reducer(state, action) {
    switch(action.type) {
        case actions.addTodo:
            const newState = {
                id: state.length + 1,
                text: action.payload,
                completed: false 
            }

            return [...state, newState]
        
        case actions.toggleTodo:
            return state.map(todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })  

        case actions.removeTodo:
            return state.filter(todo => todo.id !== action.payload)

        default:
            return state
    }
}

export default function Todo() {
    const {toggleTheme} = useContext(ThemeContext)
    const [state, dispatch] = useReducer(reducer, initialState) 
    const [text, setText] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if(text === '') {
            return alert('Parametro invalido')
        }
        dispatch({type: actions.addTodo, payload: text})
        setText('')
    }

    return (

        <div style={{height: '100vh'}}> 
            <h2>Todo List</h2>
            <button onClick={toggleTheme}>Trocar Tema</button>
            <div>
                <ul>
                    {state.map(t => (
                        <li 
                            key={t.id}
                            className={`li ${t.completed ? 'decoration': ''}`}
                        >
                            <div onClick={() => dispatch({type: actions.toggleTodo, payload: t.id})}>
                                {t.id} - {t.text
                            }</div>
                            <FaTrash onClick={() => dispatch({type: actions.removeTodo, payload: t.id})}/>
                        </li>

                    ))}
                </ul>
            </div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="">Nome da tarefa: </label>

                <input 
                    type="text" 
                    value={text} 
                    onChange={e => setText(e.target.value)} 
                />

                <button>Adicionar Tarefa</button>
            </form>
        </div>
    )
}