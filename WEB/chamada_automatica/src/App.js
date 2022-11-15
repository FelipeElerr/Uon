/*
App.js é onde nossa estrutura será construida, ela recebe as informações de rota e aplica isso na Root
*/
import * as React from 'react'
import { Route } from 'react-router-dom';
import Router from './routes';

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
