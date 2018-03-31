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
  text: 'Eventos'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        {/* Evento onClick del botón */}
        <button onClick={() => alert('Hi There!')}>Hi There!</button>
      </div>
    );
  }
}

export default App;
