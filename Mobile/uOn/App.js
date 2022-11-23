import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Landing from './Componentes/Landing'

const Tab = createBottomTabNavigator();

export default function App(){
  return(
    <Landing />
  )
}