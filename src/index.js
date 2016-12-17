import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match} from 'react-router';
import './styles/css/index.css';
import App from './App';
import Navigation from './Navigation';
import Projects from './Projects';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Match exactly pattern="/" component={App} />
        <Match exactly pattern="/projects" component={Projects} />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector("#root"))

