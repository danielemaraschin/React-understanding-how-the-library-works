import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                <li>  
                    <div> Trabalho</div>         
                    <CardNota/>
                </li>
                <li>
                <div> Trabalho</div>
                    <CardNota/>
                </li>
                <li>
                <div> Estudos</div>
                    <CardNota/>
                </li>
            </ul>
        );
    }
}
export default ListaDeNotas
