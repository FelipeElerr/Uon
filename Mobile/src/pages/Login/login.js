import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Botao from '../../componentes/Botao';
import { EntradaTexto } from '../../componentes/EntradaTexto';
import { logar } from '../../servicos/requisicoesFirebase';
import estilos from './estilos';
import { Alerta } from '../../componentes/Alerta';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [statusError, setStatusError] = useState('');
  const [mensagemError, setMensagemError] = useState('');

  async function realizarLogin() {
    if (email == '') {
      setMensagemError('O email é obrigatório!');
      setStatusError('email');
    } else if (senha == '') {
      setMensagemError('A senha é obrigatória!');
      setStatusError('senha');
    } else {
      const resultado = await logar(email, senha);
      if (resultado == 'erro') {
        setStatusError('firebase')
        setMensagemError('Email ou senha não conferem')
      }
      else {
        navigation.navigate('Principal')
      }
    }
  }

  return (
    <View style={estilos.container}>
      <LinearGradient colors={['white', '#1D8989']}
        style={estilos.background} />
      <EntradaTexto
        label="E-mail"
        value={email}
        onChangeText={texto => setEmail(texto)}
        error={statusError == 'email'}
        messageError={mensagemError}
      />
      <EntradaTexto
        label="Senha"
        value={senha}
        onChangeText={texto => setSenha(texto)}
        secureTextEntry
        error={statusError == 'senha'}
        messageError={mensagemError}
      />

      <Alerta
        mensagem={mensagemError}
        error={statusError == 'firebase'}
        setError={setStatusError}
      />

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => realizarLogin()}>
        <Text>LOGAR</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={estilos.botao}
        onPress={() => { navigation.navigate('Cadastro') }}> 
        <Text>CADASTRAR USUÁRIO</Text>
      </TouchableOpacity>
    </View>
  );
}
