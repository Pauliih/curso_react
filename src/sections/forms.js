import React, {Component} from 'react';

export default class Form extends Component {
  // Creo el método
  handleClick(event) {
    event.preventDefault(); // para evitar que el botóm haga submit
    const name = document.getElementById('name').value;
    const email = document.getElementById('twitter').value;
    console.log({name, 
      email });
  }
  render() {
    return (
      <div>
        <h4>Formularios</h4>
        <form>
          <p>
            <label>Nombre:</label>
            <input
              id='name'
              name='userName'
              placeholder='Introduce el nombre' />
          </p>

          <p>
            <label>Twitter:</label>
            <input
              id='twitter'
              name='twitterAccount'
              placeholder='Introduce tu Twitter' />
          </p>

          <button
            // Le agregamos al botón la props onClick
            onClick={this.handleClick}>
            Enviar
          </button>
        </form>
      </div>
    );
  }
}