import React, { Component } from "react"; //imrc+TAB
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor(){
    super(); // child element from Component
    this.titulo = " ";
    this.texto =" ";
  }

  _handleMudacaTitulo(evento){
    evento.stopPropagation();
   this.titulo = evento.target.value;
  }

  _handleMudacaTexto(evento){
    evento.stopPropagation();
    this.texto = evento.target.value;
   }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    console.log(`Nova nota criada: ` + " " + this.titulo + " "+ this.texto)
  }


  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudacaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudacaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
