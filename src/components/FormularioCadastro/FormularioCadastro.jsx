import React, { Component } from "react"; //imrc+TAB
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor(){
    super(); // child element from Component
    this.titulo = "";

  }

  handleMudacaTitulo(evento){
   this.titulo = evento.target.value;
   console.log(this.titulo)
  }
  render() {
    return (
      <form className="form-cadastro "
      >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudacaTitulo.bind(this.titulo)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
