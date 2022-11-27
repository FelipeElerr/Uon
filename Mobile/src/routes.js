import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Scanner from './pages/Scanner'
import Landing from './pages/Landing'

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        
        <Stack.Navigator>
          
        <Stack.Screen  name='Landing' component={Landing} options={{
            title: 'Landing',
            headerStyle: {
              backgroundColor: '#333',
            },
            headerTintColor: '#DDD',
          }}/>

          <Stack.Screen  name='Scanner' component={Scanner} options={{
            title: 'Scanner',
            headerStyle: {
              backgroundColor: '#333',
            },
            headerTintColor: '#DDD',
          }}/>
  
          
  
          <Stack.Screen  name='Login' component={Login} options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#333',
            },
            headerTintColor: '#DDD',
          }}/>
  
          <Stack.Screen  name='Cadastro' component={Cadastro} options={{
            title: 'Cadastro',
            headerStyle: {
              backgroundColor: '#333',
            },
            headerTintColor: '#DDD',
          }}/>
        </Stack.Navigator>
        
    );
  }