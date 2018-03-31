import React, { Component } from 'react';
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
  text: 'Trabajando con listas con objetos'
};

class CarItem extends Component {
  render() {
    const {car} = this.props;
    return (
      <li>
        <p><strong>Nombre: {car.name}</strong></p>
        <p><strong>Marca: {car.company}</strong></p>
      </li>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <ul>
          {
            // Transformo cada objeto 
            cars.map(car => {
              return (
                <CarItem key={car.id} car={car} />
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
