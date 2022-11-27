import React, {useState} from 'react'
import { View, Text, FlatList, TextInput, Button, DrawerLayoutAndroidBase } from 'react-native'
import Chamada from '../firebase/chamada';

export default function Login(
	//{ navigation: { navigate } }
	){
	const [ra, setRA] = useState("");
  const [senha, setSenha] = useState("");

	return(
		<View style={{flex:1}}>
			<TextInput
				value={ra}
				placeholder="RA" 
				style={{borderWidth:2, borderColor:"black", borderBottomWidth: 0, marginLeft: 20, marginRight: 20, marginTop: 20}}
				onChangeText={setRA}
			/>

			<TextInput
				value={senha}
				placeholder="Senha"
				secureTextEntry={true}
				style={{borderWidth:2, borderColor:"black", marginBottom:20, marginLeft: 20, marginRight: 20}}
				onChangeText={setSenha}
			/>

			<Button 
				title="Login"
				onPress={
					()=>{
						window.alert("Logando: "+ra+" "+senha)
						//navigate('Teste')
					}
				}
			/>

			<Chamada/>
		</View>
	)
}