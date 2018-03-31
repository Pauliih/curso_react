import React, { Component } from 'react';
import CarItem from './sections/lists';
import Form from './sections/forms';
import Box from './sections/childenProps';
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
  text: 'Aprende React'
};

class App extends Component {
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
        <Form />
        <h4>Children Props</h4>
        <Box> Hola! Soy un Children</Box>
        <Box> Otro Box con otro contenido</Box>
      </div>
    );
  }
}

export default App;
