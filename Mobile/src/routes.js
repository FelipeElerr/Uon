import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Login from './pages/Login/login'
import Cadastro from './pages/Cadastro/cadastro'
import Principal from './pages/Principal/principal'
import Scanner from './pages/Scanner'
import Landing from './pages/Landing'

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (

    <Stack.Navigator>

      <Stack.Screen name='Login' component={Login} options={{
        title: 'Login',
        headerStyle: {
          backgroundColor: '#333',
        },
        headerTintColor: '#DDD',
      }} />

      <Stack.Screen name='Cadastro' component={Cadastro} options={{
        title: 'Cadastro',
        headerStyle: {
          backgroundColor: '#333',
        },
        headerTintColor: '#DDD',
      }} />

      <Stack.Screen name='Principal' component={Principal} options={{
        title: 'Principal',
        headerStyle: {
          backgroundColor: '#333',
        },
        headerTintColor: '#DDD',
      }} />

      <Stack.Screen name='Scanner' component={Scanner} options={{
        title: 'Scanner',
        headerStyle: {
          backgroundColor: '#333',
        },
        headerTintColor: '#DDD',
      }} />

    </Stack.Navigator>

  );
}