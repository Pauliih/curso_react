import React, {Component} from 'react';

export default class Form extends Component {
  // Creo el método
  handleClick = (event) => {
    event.preventDefault(); // para evitar que el botóm haga submit
    const name = this.inputName.value;
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
            <label htmlFor='name'>Nombre: </label>
            <input
              id='name'
              name='userName'
              placeholder='Introduce el nombre'
              // Añado el atributo ref al input para recuperar el valor
              ref={inputElement => this.inputName = inputElement} />
          </p>

          <p>
            <label htmlFor='twitter'>Twitter: </label>
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