import React from "react"
import { render } from "react-dom"

Class FormularioCadastro extends Component{
    render(){
        return(
            <form>
            <input type="text" placeholder="Título" />
             <textarea placeholder="Escreva sua nota..." />
           <button>Criar Nota</button>
         </form>
        )
    }
}