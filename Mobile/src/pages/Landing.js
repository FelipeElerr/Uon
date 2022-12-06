import React, { useContext } from 'react'
import { Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import  { AuthContext } from '../contexts/auth'

export default function Landing() {
    const navigation = useNavigation()
    return (
        <View>
            
            <Button
                color='#333'
                title="Login"
                onPress={
                    () => navigation.navigate('Login')
                }
            />

            <Button
                color='#666'
                title="Cadastro"
                onPress={
                    () => navigation.navigate('Cadastro')
                }
            />

            <Button
                color='#666'
                title="Scanner"
                onPress={
                    () => navigation.navigate('Scanner')
                }
            />

        </View>
    )
}