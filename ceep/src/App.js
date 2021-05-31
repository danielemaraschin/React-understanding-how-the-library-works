import React, { Component } from 'react';
import ListadeNotas from './components/ListaDeNotas/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListadeNotas />
      </section>
    );
  }
}

export default App;
