import React, {Component} from 'react';

class ComponentA extends Component {
  render() {
    return <p>Componente A</p>;
  }
}

class ComponentB extends Component {
  render() {
    return <p>Componente B</p>;
  }
}

export default class ConditionalSection extends Component {
  // Agrego un state mostrarA
  constructor() {
    super();
    this.state = {mostrarA: false};
  }

  render() {    
    return (
      <div>
        <h4>Conditional Rendering</h4>
        {/* Usamos el operador ternario para mostrar un componente u otro dependiendo del state que tenga mostrarA  */}
        {this.state.mostrarA ? <ComponentA /> : <ComponentB />}
      </div>
    );
  }
}