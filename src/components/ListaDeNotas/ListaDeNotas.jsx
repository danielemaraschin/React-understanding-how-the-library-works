import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {
  

  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => { //recebe nas props os array de notas que é o estado do app
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota titulo={nota.titulo} texto={nota.texto}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
