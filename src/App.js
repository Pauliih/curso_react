import React, { Component } from 'react';
import './App.css';

class Title extends Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
// Cuando queremos que nuestros componentes tenga un valor por defecto para las props 
// Default Props
Title.defaultProps = {
  text: 'Primer componente con state'
};

class Contador extends Component {
  // Para añadir el state
  constructor() {
    super();
    this.state = {contador: 1};
  }

  render() {
    // const contador = 0;
    return <span>{this.state.contador}</span>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Contador />
      </div>
    );
  }
}

export default App;
