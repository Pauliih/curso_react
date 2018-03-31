import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Componente funcional (solo pinta en la pantalla)

// function Paragraph(props) {
//   return <p>{props.title}</p>;
// }

// const Paragraph = (props) => <p>{props.title}</p>;

class Paragraph extends Component {
  render() {
    return <h3>{this.props.title}</h3>;
  }
}

class Texto extends Component {
  render() {
    // Destructuring (se hace en la primera línea del Render)
    const {
      // Las props son inmutables
      arrayOfNumbers, 
      isActivated, 
      multiply,
      objectWithInfo
    } = this.props;
    // No se puede modificar la props title
    // this.props.title = <h3>Otro título</h3>;
    const textoSegunBoolean = isActivated ? 'On!' : 'Off';
    // map da como resultado un elemento, tomando cada elemento del array y aplicandole lo que se le especifica
    const mappedNumbers = arrayOfNumbers.map(multiply);
    return (
      <div>
        {this.props.title}
        <p>{textoSegunBoolean}</p>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{objectWithInfo.key}</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Paragraph title="Hola mundo, desde las props" />
        </header>
        {/* Si a la prop boolean (isActivated) no le pasamos ningún valor, lo tomará como true */}
        <Texto 
          // Se ordenan las props alfabeticamente para encontrarlas más facilmente
          // Se abren llaves para pasarle valor a una props
          arrayOfNumbers={[2, 3, 10]}
          isActivated
          // Hacemos una funcion
          multiply={(number) => number * 2}
          number={2 + 2}
          objectWithInfo={ { key: 'First Value', 
            key2: 'otherValue'} }
          text="Esto es un strong"
          title={<h1>Este es el título</h1>}
        />
      </div>
    );
  }
}

export default App;
