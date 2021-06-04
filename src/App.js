import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  constructor(){
    this.notas = []
  }

  criarNota(titulo, texto){
    console.log(`Nova nota criada `+ titulo+ " " + texto)

  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota}/>
        <ListaDeNotas notas={this.notas}/> 
      </section>
    );
  }
}

export default App;
