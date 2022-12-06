import React , {useContext} from 'react';
import { View, Text } from 'react-native';
import Cabecalho from '../../componentes/Cabecalho/cabecalho';
import Materia from '../../componentes/Materias';
import estilos from './estilos';
import { auth } from '../../config/firebase';
import Botao from '../../componentes/Botao';
import { AuthContext } from '../../contexts/auth'


export default function Principal({ navigation }) {
  const usuario = auth.currentUser;
  const { user, cadastro } = useContext(AuthContext)
  
  return (
    <View style={estilos.container}>
      
     {/* <Cabecalho navigation={navigation} /> */}
      <Text style={estilos.texto}>Usuário: {usuario.email}</Text>
      <Materia nome="DevMobile" professor="Renato" />
      <Materia nome="UPX" professor="Germano" />
      <Materia nome="Redes" professor="Jones" />
      <Materia nome="Eletrônica" professor="Alessandro" />
      <Botao
        onPress={() => { 
          cadastro('200738')
          navigation.navigate('Scanner')
         }}
      >
        Scannear QrCode
      </Botao>
      <Text>RA: {user.ra}</Text>
     </View>
  );
}
