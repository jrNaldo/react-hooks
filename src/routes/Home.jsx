import { useContext, useEffect, useRef, useState } from "react"
import { ThemeContext } from "../context/Theme_Context"
import UseEffect from "../Hooks/UseEffect"
import UseRef from "../Hooks/UseRef"
import UseState from "../Hooks/UseState"
import ApiGithub from "../components/Api"
import UseReducer from "../Hooks/UseReducer"

export default function Home(){
    const {theme, toggleTheme} = useContext(ThemeContext)
 
    return (
        <div className="Home">
            <h1>Pagina Inicial</h1>
            <p>O tema atual é {theme}</p>
            <button onClick={toggleTheme}>Trocar Tema</button>

            <UseState />
            <UseEffect />
            <UseRef />
            <UseReducer />
            <ApiGithub />
        </div>
    )
}