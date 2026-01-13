import { useContext } from "react"
import { ThemeContext } from "../context/Theme_Context"
import CustomHooks from "../customHooks/customHooks"
import CustomHooks2 from "../customHooks/customHooks2"


export default function Contato(){
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <div style={{height: '100vh'}}>
            <h2>Contato</h2>
            <p>O tema atual é: {theme}</p>
            <button onClick={toggleTheme}>Trocar Tema</button>

            <CustomHooks />
            <CustomHooks2 />
        </div>
    )
}