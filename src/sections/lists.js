import React, { Component } from 'react';

export default class CarItem extends Component {
  render() {
    const { car } = this.props;
    return (
      <li>
        <p><strong>Nombre: { car.name }</strong ></p >
        <p><strong>Marca: { car.company }</strong ></p >
      </li >
    );
  }
}
