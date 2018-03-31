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
  text: 'Renderizado condicional'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <ConditionalSection />
      </div>
    );
  }
}

export default App;
