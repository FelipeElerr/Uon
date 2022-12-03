/*
Essa pagina possui a capacidade de gerar o QRcode que será interpretado pelo leitor dos alunos
*/

import { QRCode } from 'react-qrcode-logo';
import React, { useEffect, useState } from 'react'
import db from '../../config'
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore'

export default function QrCode(props){
  const [hash, setHash] = useState();

  useEffect(
    () => { 
      criarHash();
      criarNovaAula();
    }, []
  );

  const codigoAulaHoje = () => { //271122
    const date = new Date();

    let dd = date.getDate() >= 10 ? date.getDate() : "0"+date.getDate()
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear() - 2000;
    
    let retorno = dd+''+mm+''+yy

    return retorno
  };

  const criarHash = async () => {
    //const code = props.aula +"-"+ props.dia +"-"+ codigoAulaHoje()
    const code = 'CP600TIN1-SEG1900-031222'

    const resultado = await fetch("https://api.hashify.net/hash/md4/hex?value=" + code);
    const json = await resultado.json();

    console.log(code)
    setHash(json['Digest'])
  };  

  const criarNovaAula = async () => {
    //console.log('Disciplina', props.code, 'Chamada', props.dia)
    updateDoc(
      doc(db, 'Disciplina', props.aula, 'Chamada', props.dia), 
      { '031222': ['9d0d496d7a75a37c7b3706dc0ee6ab7c']}
      //{ [codigoAulaHoje()]: [hash]}
    )
  };

  return(
    <QRCode value={hash}/>
  )
}