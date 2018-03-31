import React, { Component } from 'react';
import CarItem from './sections/lists';
import cars from './data/cars.json';

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
    // this.handleMouseMove = this.handleMouseMove.bind(this);
  }
  // Creo el controlador del evento
  // 2) con arrow function
  handleMouseMove = (event) => {
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
        <ul>
          {
            // Transformo cada objeto 
            cars.map(car => {
              return (
                <CarItem key= { car.id } car = { car } />
              );
            })
          }
        </ul>
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
