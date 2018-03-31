import React, { Component } from 'react';
import ConditionalSection from './sections/conditional';

import './App.css';

class Title extends Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
// Cuando queremos que nuestros componentes tenga un valor por defecto para las props 
// Default Props
Title.defaultProps = {
  text: 'Trabajando con listas'
};

class App extends Component {
  render() {
    const arrayOfNumbers = [1, 1, 3, 4, 5];
    return (
      <div className="App">
        <Title />
        <ConditionalSection />
        {arrayOfNumbers.map((element, index) => {
          return <p key={index}>Soy el número {element}</p>;
        })
        }
      </div>
    );
  }
}

export default App;
