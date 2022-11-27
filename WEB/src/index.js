/*
É a pagina principal do nosso software, ela será a primeira coisa que o sistema irá executar
Ela tem a função de criar nossa Raiz e aplicar o componente do nosso aplicativo nela
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
