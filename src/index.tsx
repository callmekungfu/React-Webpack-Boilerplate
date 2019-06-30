import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { LandingPage } from './components/landing/Landing';
declare let module: any;

ReactDOM.render(
  <LandingPage appName="React Typescript Boilerplate" />,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
