import React from 'react'

import Routes from './src/routes'
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexts/auth'

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}