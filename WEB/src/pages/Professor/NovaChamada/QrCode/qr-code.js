/*
Essa pagina possui a capacidade de gerar o QRcode que será interpretado pelo leitor dos alunos
*/

import { QRCode } from 'react-qrcode-logo';
import * as React from 'react'
import db from '../../../../config'
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore'

export default function QrCode(props){
  const [hash, setHash] = React.useState();

  React.useEffect(
    () => { 
      criarHash();
      criarNovaAula();
    }, []
  );

  const codigoAulaHoje = () => { //271122
    const date = new Date();

    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear() - 2000;
    
    let retorno = dd+''+mm+''+yy

    return retorno
  };

  const criarHash= async () => {
    const code = props.code + codigoAulaHoje()

    const resultado = await fetch("https://api.hashify.net/hash/md4/hex?value=" + code);
    const json = await resultado.json();

    setHash(json['Digest'])
  };  

  const criarNovaAula = async () => {
    //console.log('Disciplina', props.code, 'Chamada', props.dia)
    updateDoc(doc(db, 'Disciplina', props.code, 'Chamada', props.dia), {
      [codigoAulaHoje()]: [hash],
    })
  };

  return(
    <QRCode value={hash}/>
  )
}