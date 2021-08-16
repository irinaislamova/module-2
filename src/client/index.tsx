import React from 'react';
import { hydrate } from 'react-dom';

import { App } from './components';

import { Header } from '../shared';

window.addEventListener('load', () => {
  const rootElement = document.getElementById('root');

  hydrate(<Header />, rootElement);
});
