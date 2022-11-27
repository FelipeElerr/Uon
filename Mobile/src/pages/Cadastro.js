import React, {useState} from 'react'
import { View, Text, FlatList, TextInput, Button, DrawerLayoutAndroidBase } from 'react-native'

export default function Cadastro(
	//{ navigation: { navigate } }
	){
	const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [ra, setRA] = useState("");
  const [senha, setSenha] = useState("");

	return(
		<View style={{flex:1}}>
			<TextInput
				value={nome}
				placeholder="Nome" 
				style={{borderWidth:2, borderColor:"black", borderBottomWidth: 0, marginLeft: 20, marginRight: 20, marginTop: 20}}
				onChangeText={setNome}
			/>

			<TextInput
				value={email}
				placeholder="Email" 
				style={{borderWidth:2, borderColor:"black", borderBottomWidth: 0, marginLeft: 20, marginRight: 20}}
				onChangeText={setEmail}
			/>

			<TextInput
				value={ra}
				placeholder="RA" 
				style={{borderWidth:2, borderColor:"black", borderBottomWidth: 0, marginLeft: 20, marginRight: 20}}
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
				title="Cadastrar"
				onPress={
					()=>{
						window.alert("Cadastrando: "+nome+" "+email+" "+ra+" "+senha)
						//navigate('Teste')
					}
				}
			/>
		</View>
	)
}