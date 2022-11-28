import React, { useState, useEffect, useContext } from 'react'

import db from "../config/firebase"
import { collection, getDocs, setDoc, doc } from 'firebase/firestore'
import { AuthContext } from '../contexts/auth'

export default function Chamada() {

  const [vetor, setVetor] = useState([])
  const { hash } = useContext(AuthContext)
  const vetorAula = []

  

  useEffect(
    () => {
      getDisciplina()
    }, []
  );

  const getDisciplina = async () => {
    const snapshotDisc = await getDocs(collection(db, 'Disciplina'))
    snapshotDisc.docs.forEach(item => {
      getChamada(item.id)
    }
    )
  };

  const getChamada = async (disciplina) => {
    setVetor([])
    const snapshotCham = await getDocs(collection(db, 'Disciplina', disciplina, 'Chamada'))
    snapshotCham.docs.forEach(item => {
      const Chamada = {
        dia: item.id,
        dados: item.data()
      }
      for (const aula in Chamada.dados) {
        if (Chamada.dados[aula][0] === hash){
            console.log(Chamada.dia, disciplina, aula)
            vetorAula.push(Chamada.dados[aula])
            vetorAula[0].push("200956")
            console.log("Vetor aula: ", vetorAula)
            pushRA(disciplina, Chamada.dia, aula)
        }
      }
    })
  };

  const pushRA = async (disciplina, dia, aula) => {
    try {

      setDoc(doc(db, 'Disciplina', disciplina, 'Chamada', dia), {
        [aula]: vetorAula[0]
        },{merge:true});

      console.log("Presença computada")
      
     } catch (error) {
      console.log(error)
    }
    
  }
  return vetor
}
