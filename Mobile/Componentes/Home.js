import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './Login'
import Cadastro from './Cadastro'
import Locate from './Locate';

const Tab = createBottomTabNavigator();

function Teste(props){
  return (
    <View>
			<Text>Olá</Text>
    </View>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Teste" 
          component={Teste}
          options={{
            tabBarLabel: "Teste",
            tabBarLabelStyle: {color: '#333'},
            tabBarIcon: () => (
              <Icon name="home" size={30} color="#333" />
            )
          }}
        />

        <Tab.Screen 
          name="Teste2" 
          component={Teste}
          options={{
            tabBarLabel: "Teste2",
            tabBarLabelStyle: {color: '#333'},
            tabBarIcon: () => (
              <Icon name="file" size={30} color="#333" />
            )
          }}
        />

        <Tab.Screen 
          name="Teste3" 
          component={Teste}
          options={{
            tabBarLabel: "Teste3",
            tabBarLabelStyle: {color: '#333'},
            tabBarIcon: () => (
              <Icon name="gears" size={30} color="#333" />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}