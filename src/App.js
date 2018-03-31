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
  handleClick(event) {
    // evento sintético, hace que sea compatible con todos los navegadores
    // soportados por react
    console.log(event);
    // nativeEvent muestra el evento nativo
    console.log(event.nativeEvent);
    alert('Hi There!');
  }
  render() {
    return (
      <div className="App">
        <Title />
        {/* Evento onClick del botón */}
        <button onClick={this.handleClick}>Hi There!</button>
      </div>
    );
  }
}

export default App;
