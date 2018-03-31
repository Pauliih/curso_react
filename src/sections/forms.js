import React, {Component} from 'react';

export default class Form extends Component {
  // 1. Agrego un state inicial
  constructor() {
    super();
    this.state = {
      inputName: '',
      inputTwitter: '@',
      inputTerms: true
    };
  }
  // Creo el método
  handleSubmit = (event) => {
    event.preventDefault(); // para evitar que el botóm haga submit
    console.log(this.state);
  }

  handleChange = (event) => {
    console.log('handleChange');
    console.log(event.target.checked);
    // 5 modificamos el inputTerms con el nuevo valor 
    this.setState({inputTerms: event.target.checked});
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
              // 3 agregamos onChange para  cambiar su estado manualmente
              onChange={event => this.setState({inputName: event.target.value})} 
              placeholder='Introduce el nombre'
              // Añado el atributo ref al input para recuperar el valor
              ref={inputElement => this.inputName = inputElement} 
              // 2 usamos el state inicial para que cada input muestre el valor
              value={this.state.inputName}/>
          </p>

          <p>
            <label htmlFor='twitter'>Twitter: </label>
            <input
              id='twitter'
              name='twitterAccount'
              // 3 agregamos onChange para  cambiar su estado manualmente
              onChange={event => this.setState({ inputTwitter: event.target.value })} 
              placeholder='Introduce tu Twitter'
              // 2 usamos el state inicial para que cada input muestre el valor
              value={this.state.inputTwitter} />
          </p>  

          <p>
            <label>
              <input 
                // 2 usamos el state inicial para que cada input muestre el valor
                checked={this.state.inputTerms}
                onChange={this.handleChange}
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