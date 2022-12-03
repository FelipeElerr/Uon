import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './pages/Login/login'
import Cadastro from './pages/Cadastro/cadastro'
import Principal from './pages/Principal/principal'
import Scanner from './pages/Scanner'
import Landing from './pages/Landing'
import ActionBarImage from './ActionBarImage';
import Cabecalho from './componentes/Cabecalho';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    
    <Stack.Navigator>
      
      <Stack.Screen name='Login' component={Login} options={{
        title: 'Login',
        headerStyle: {
          backgroundColor: 'white',
          
        },
        headerTintColor: '#333',
        headerTitleAlign:'center',
        headerTitle: () => <ActionBarImage />,
      }} />

      <Stack.Screen name='Cadastro' component={Cadastro} options={{
        title: 'Cadastro',
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: '#333',
        headerTitleAlign:'center',
        headerTitle: () => <ActionBarImage />,
      }} />

      <Stack.Screen name='Principal' component={Principal} options={{
        title: 'Principal',
        headerBackground:  () => <Cabecalho navigation={navigation} />,
        headerTintColor: '#333',
        headerTitleAlign:'center',
        headerTitle: () => <ActionBarImage />,
      }} />

      <Stack.Screen name='Scanner' component={Scanner} options={{
        title: 'Scanner',
        headerBackground:  () => <Cabecalho navigation={navigation} />,
        headerTintColor: '#333',
        headerTitleAlign:'center',
        headerTitle: () => <ActionBarImage />,
      }} />

    </Stack.Navigator>

  );
}