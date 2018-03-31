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
  text: 'Este es un título por defecto'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
      </div>
    );
  }
}

export default App;
