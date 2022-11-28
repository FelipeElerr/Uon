import React, { useState, useEffect, useContext } from 'react'

import db from "../config/firebase"
import { collection, getDocs } from 'firebase/firestore'
import { AuthContext } from '../contexts/auth'

export default function Chamada() {

  const [vetor, setVetor] = useState([]);
  const { hash } = useContext(AuthContext)

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
      for (const aulas in Chamada.dados) {
        console.log(Chamada.dados)
        // Chamada.dados.forEach(aula => {
        //   aula[0] === hash?
        //   console.log("Dia da Chamada:", Chamada.dia, "Hash: ", hash, "Hash do banco: ", aula[0]) : console.log("Aula não encontrada! Hash: " ,hash, "Hash do banco: ", aula[0] )
        // });
        
      }
    })
  };

  return vetor
}
