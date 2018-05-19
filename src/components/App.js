import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="App">
        <article className="hero">
          <p className="hero-text">
            Hello world! My name is <span className="textEmphasis">Jeff.</span>{' '}
            I'm a Front End Web Developer who loves solving problems, building
            robots, and playing in the mountains! Want to work with me? Please{' '}
            <Link className="textEmphasis" to="/Contact">
              contact me here
            </Link>{' '}
            if you'd like to connect!
          </p>
        </article>
      </section>
    );
  }
}
