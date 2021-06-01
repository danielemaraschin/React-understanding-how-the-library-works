import React, { Component } from 'react';
import ListadeNotas from './components/ListaDeNotas/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro />
        <ListadeNotas />
      </section>
    );
  }
}

export default App;
