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
  text: 'Primer componente con state'
};

// Componente Contador
class Contador extends Component {
  // Para usar props en el constructor, se las pasamos por parametro al constructor y a super
  constructor(props) {
    super(props);
    this.state = {contador: this.props.contadorInicial};
    // Incrementamos el contador en 1 por cada segundo que pasa
    setInterval(() => {
      // El state solo se puede modificar con setState y es asíncrono
      this.setState({ contador: this.state.contador + 1});
    }, 1000);
  }

  render() {
    // Props numero es el estado del contador
    return <ContadorNumero numero={this.state.contador} />;
  }
}

// Default Props
Contador.defaultProps = {
  contadorInicial: 0
};

// Componente hijo del componente Contador
class ContadorNumero extends Component {
  render() {
    console.log('ContadorNumero render()');
    // Se vuelve a renderizar con la nueva props
    return <span>{this.props.numero}</span>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        {/* Para personalizar el contadorInicial */}
        <Contador contadorInicial={100} />
      </div>
    );
  }
}

export default App;
