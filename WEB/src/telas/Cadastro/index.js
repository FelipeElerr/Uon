import React, { useState } from 'react';
import { Alert, View, SegmentedControlIOS } from 'react-native';
import Botao from '../../componentes/Botao';
import { EntradaTexto } from '../../componentes/EntradaTexto';
import estilos from './estilos';
import { cadastrar } from '../../servicos/requisicoesFirebase';
import { Alerta } from '../../componentes/Alerta';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import db from '../../config/firebase';
import getLastDocument from '../../servicos/GetLastDocument';

export default function Cadastro() {  
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [statusError, setStatusError] = useState('');
  const [mensagemError, setMensagemError] = useState('');

  async function realizarCadastro(){
    if(email == ''){
      setMensagemError('Preencha com seu email');
      setStatusError('email');
    } else if(senha == ''){
      setMensagemError('Digite sua senha');
      setStatusError('senha');
    } else if(confirmaSenha == ''){
      setMensagemError('Confirme sua senha');
      setStatusError('confirmaSenha');
    } else if(confirmaSenha != senha){
      setMensagemError('As senhas não conferem!');
      setStatusError('confirmaSenha');
    } else {
      const resultado = await cadastrar(email, senha);
      setStatusError('firebase')
      CadastroProfessor()
      if(resultado == 'sucesso') {
        setMensagemError('Usuário criado com sucesso!')
        setEmail('')
        setSenha('')
        setConfirmaSenha('')
        setNome('')
      }
      else {
        setMensagemError(resultado)
      }
    }
  }

  const CadastroProfessor = async (valorId) =>{
    let ultimo = await getLastDocument('Professor')
    setDoc(doc(db, 'Professor', String(parseInt(ultimo)+1)),{
      nome: nome,
      email:email
    });
  }

  return (
    <View style={estilos.container}>
      <EntradaTexto 
        label="Nome"
        value={nome}
        onChangeText={texto => setNome(texto)}
        error={statusError == 'nome'}
        messageError={mensagemError}
      />

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

      <EntradaTexto
        label="Confirmar Senha"
        value={confirmaSenha}
        onChangeText={texto => setConfirmaSenha(texto)}
        secureTextEntry
        error={statusError == 'confirmaSenha'}
        messageError={mensagemError}
      />

      <Alerta 
        mensagem={mensagemError}
        error={statusError == 'firebase'}
        setError={setStatusError}
      />
      
      <Botao onPress={() => realizarCadastro()}>CADASTRAR</Botao>
    </View>
  );
}
