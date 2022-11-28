import React from 'react';
import { View, Text } from 'react-native';
import Cabecalho from '../../componentes/Cabecalho';
import Materia from '../../componentes/Materias';
import estilos from './estilos';
import { auth } from '../../config/firebase';
import Botao from '../../componentes/Botao';

export default function Principal({ navigation }) {
  const usuario = auth.currentUser;

  return (
    <View style={estilos.container}>
      <Cabecalho navigation={navigation} />
      <Text style={estilos.texto}>Usuário: {usuario.email}</Text>

      <Materia nome="DevMobile" professor="Renato" />
      <Materia nome="UPX" professor="Germano" />
      <Materia nome="Redes" professor="Jones" />
      <Materia nome="Eletrônica" professor="Alessandro" />
      <Botao 
        onPress={() => { navigation.navigate('Scanner') }}
      >
        Scannear QrCode
      </Botao>
     </View>
  );
}
