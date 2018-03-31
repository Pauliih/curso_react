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

function useConditionalRendering(mostrarA) {
  if (mostrarA) {
    return <ComponentA />;
  } else {
    return <ComponentB />;
  }
}

export default class ConditionalSection extends Component {
  // Agrego un state mostrarA
  constructor() {
    super();
    this.state = {mostrarA: true};
  }

  render() {
    return (
      <div>
        <h4>Conditional Rendering</h4>
        {/* Usamos una funcion para ostrar un componente u otro dependiendo del state que tengan  */}
        {/* <ComponenteA />
        <ComponenteB /> */}
        {useConditionalRendering(this.state.mostrarA)}
      </div>
    );
  }
}