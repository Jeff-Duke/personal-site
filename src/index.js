import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';
import './styles/css/index.css';
import App from './components/App';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Contact from './components/Contact';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Match exactly pattern="/" component={ App } />
        <Match exactly pattern="/projects" component={ Projects } />
        <Match exactly pattern="/contact" component={ Contact } />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector("#root"));

