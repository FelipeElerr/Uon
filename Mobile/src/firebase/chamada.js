import React, { useState, useEffect, useContext } from 'react'

import db from './config';
import { collection, getDocs } from 'firebase/firestore'
import  { AuthContext } from '../contexts/auth'

export default function Chamada(){

    const [vetor, setVetor] = useState([]);
    const {hash} = useContext(AuthContext)

useEffect(
    () => {
      getAulas()
    }, []
  );

const getAulas = async () => {
    setVetor([])
    const snapshot = await getDocs(collection(db, 'Chamada'))
    snapshot.docs.forEach(element => {
      const Chamada = {
        matricula: element.id, 
        dados: element.data()
      }
      for(const Aula in Chamada.dados){
        vetor[Aula] = Chamada.dados[Aula]
      }
    })

    for(const sla in vetor){
      console.log(vetor[sla][0])
      console.log(hash)
    }

  };
  return vetor
}
