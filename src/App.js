import React, { Component } from 'react';
import CarItem from './sections/lists';
import Form from './sections/forms';
import Article from './sections/Article';
import cars from './data/cars.json';

import './App.css';

class Title extends Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
// Cuando queremos que nuestros componentes tenga un valor por defecto para las props 
// Default Props
Title.defaultProps = {
  text: 'Aprende React'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        {/* Evento onClick del botón */}
        <button onClick={this.handleClick}>Hi There!</button>
        <ul>
          {
            // Transformo cada objeto 
            cars.map(car => {
              return (
                <CarItem key= { car.id } car = { car } />
              );
            })
          }
        </ul>
        <Form />
        <h4>Children Props</h4>
        <Article
          author="Paula Campos"
          date={new Date().toLocaleDateString()}
          title='Artículo sobre la prop children' >
          <p>El contenido que envolvemos dentro del componente Article será 
            enviado al componente como this.props.children.</p>
          <strong>Y mantiene las etiquetas y componentes que hayas añadido 
            dentro</strong>          
        </Article>
        <Article
          author="Paula Campos"
          date={new Date().toLocaleDateString()}
          title='Artículo 2' >
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ea ipsam id quam voluptatibus libero iste nisi deleniti saepe aspernatur sed praesentium quidem aliquid quis, mollitia dolorum. Maxime, deleniti quos.</p>
          <strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque ea, placeat distinctio tenetur eum doloribus fugit suscipit iste eveniet quia officiis itaque quidem autem vel inventore amet quis quibusdam cumque.</strong>
        </Article>
        <Article
          author="Paula Campos"
          date={new Date().toLocaleDateString()}
          title='Artículo 3' >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, deserunt. Natus beatae asperiores aliquid odio, aspernatur, architecto at alias maiores assumenda voluptatem molestiae iure, sequi magnam laborum? Libero, excepturi ad.</p>
          <strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt voluptatibus provident repellendus atque, vel fuga fugit officia dignissimos, voluptatem sit ducimus deserunt placeat soluta, enim animi corporis consequatur mollitia.</strong>
        </Article>
      </div>
    );
  }
}

export default App;
