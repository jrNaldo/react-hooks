import { useContext } from "react"
import { ThemeContext } from "../context/Theme_Context"


export default function Contato(){
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <div style={{height: '100vh'}}>
            <h2>Contato</h2>
            <p>O tema atual é: {theme}</p>
            <button onClick={toggleTheme}>Trocar Tema</button>
        </div>
    )
}