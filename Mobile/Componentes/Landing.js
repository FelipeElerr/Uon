import React, {useState, useEffect} from 'react'
import { View, Text, FlatList, TextInput, Button} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './Login'
import Cadastro from './Cadastro'

const Stack = createNativeStackNavigator();

function uOn(props){
  return (
    <View>
      <Button
        color = '#333'
        title = "Login"
        onPress = {
          () => props.navigation.navigate('Login')
        } 
      />

      <Button
        color = '#666'
        title = "Cadastro"
        onPress = {
          () => props.navigation.navigate('Cadastro')
        } 
      />
    </View>
  )
}

export default function Menu() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
				<Stack.Screen  name='uOn' component={uOn} options={{
          title: 'uOn',
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
    </NavigationContainer>
  );
}