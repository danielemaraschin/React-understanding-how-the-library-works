import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  constructor(){
    super();
    this.state = { //PROPRIEDADE ESPECIAL
      notas: [] //ao inves do this.notas = [] solto no constructor
    }
  }

  criarNota(titulo, texto){ //ao criar nova nota atribui um novo estado pra esse componente e renderiza
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]//spreadOperator 
    const novoEstado ={     //se tivesse mais props alem das notas poderia usar o spread operator aqui dentro tb
      notas: novoArrayNotas //ao inves de trabalhar com this.notas
    }
    this.setState(novoEstado) //acessor que recebe o novo estado do componente -atualiza o estado que gerencia a renderizacao e renderiza o elemento
  }

  render() {
    console.log("render")
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
