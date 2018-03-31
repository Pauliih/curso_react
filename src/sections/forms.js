import React, {Component} from 'react';

export default class Form extends Component {
  // Creo el método
  handleSubmit = (event) => {
    event.preventDefault(); // para evitar que el botóm haga submit
    const name = this.inputName.value;
    const email = document.getElementById('twitter').value;
    console.log({name, 
      email });
  }

  handleChange = (event) => {
    console.log('handleChange');
    console.log(event.target.checked);
  }

  render() {
    return (
      <div>
        <h4>Formularios</h4>
        <form onSubmit={this.handleSubmit}>
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

          <p>
            <label>
              <input onChange={this.handleChange}
                type='checkbox' />
                Accepted terms
            </label>
          </p>

          <button>Enviar</button>
        </form>
      </div>
    );
  }
}