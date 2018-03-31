import React, {Component} from 'react';

class LoginButton extends Component {
  render() {
    return <button>Iniciar Sesión</button>;
  }
}

class LogoutButton extends Component {
  render() {
    return (
      <div>
        <p>Bienvenido, usuario!</p>
        <button>Cerrar Sesión</button>
      </div>
    );
  }
}

export default class ConditionalSection extends Component {
  // Agrego un state mostrarA
  constructor() {
    super();
    this.state = {isLogin: true};
  }

  render() {    
    return (
      <div>
        <h4>Conditional Rendering</h4>
        {/* Usamos el operador ternario para mostrar un componente u otro dependiendo del state que tenga mostrarA  */}
        {this.state.isLogin ? <LogoutButton /> : <LoginButton />}
      </div>
    );
  }
}