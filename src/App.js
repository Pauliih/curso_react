import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Componente funcional (solo pinta en la pantalla)

// function Parrafo(props) {
//   return <p>{props.title}</p>;
// }

// const Parrafo = (props) => <p>{props.title}</p>;

class Parrafo extends Component {
  render() {
    return <h3>{this.props.title}</h3>;
  }
}

class Texto extends Component {
  render() {
    // const textoSegunBoolean = this.props.isActivated ? 'On!' : 'Off';
    // map da como resultado un elemento, tomando cada elemento del array y aplicandole lo que se le especifica
    // const mappedNumbers = this.props.arrayOfNumbers.map(element => element * 3);
    const mappedNumbers = this.props.arrayOfNumbers.map(this.props.multiply);
    return (
      <div>
        {/* <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{textoSegunBoolean}</p> */}
        <p>{mappedNumbers.join(', ')}</p>
        <p>{this.props.objectWithInfo.key}</p>
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
          <h1 className="App-title">Bienvenido a este curso</h1>
        </header>
        {/* <h2>Vamos a aprender React</h2> */}
        <Parrafo title="Hola mundo, desde las props 3" />
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
        />
      </div>
    );
  }
}

export default App;
