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
  constructor() {
    super();
    this.state = { mouseX: 0, 
      mouseY: 0 };
    // 1) Enlazamos el método que controla al evento  
    // Utilizando el método bind, que devuelve el mismo método pero en el contexto correcto.
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }
  // Creo el controlador del evento
  handleMouseMove(event) {
    // extraemos del evento la posición del mouse relativa al área del contenedor
    const { clientX, clientY} = event;
    // actualizamos el state del componente con setState
    this.setState({mouseX: clientX, 
      mouseY: clientY});
  }

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
        <div 
          // Agrego la props al elemento div usando como funcion el handleMouseMove que habíamos creado
          onMouseMove={this.handleMouseMove}
          style={{border: '1px solid #000', 
            margin: 10, 
            padding: 10}}>
          {/* Mostramos el state actual */}
          <p>{this.state.mouseX}, {this.state.mouseY}</p>
        </div>
      </div>
    );
  }
}

export default App;
