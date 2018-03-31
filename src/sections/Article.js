import React, { Component } from 'react';
import Box from './childenProps';

export default class Article extends Component {
  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        <p><em>Escrito por {this.props.author}</em></p>
        <Box>{this.props.date}</Box>
        <article>
          {this.props.children}
        </article>
      </section>
    );
  }
}