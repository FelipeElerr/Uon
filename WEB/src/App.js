/*
App.js é onde nossa estrutura será construida, ela recebe as informações de rota e aplica isso na Root
*/
import * as React from 'react'
import { Route } from 'react-router-dom';
import Routes from './routes';
import AuthProvider from "./contexts/auth"

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
    
  );
}

export default App;
