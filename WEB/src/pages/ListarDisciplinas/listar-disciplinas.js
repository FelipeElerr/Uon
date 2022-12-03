import React, { useState, useEffect } from 'react'
import Header from "../../componentes/Header/header";
import Footer from "../../componentes/Footer/footer";
import { Link } from "react-router-dom";
import './listar-disciplinas.css';
import db from "../../firebase";
import { getDocs, collection, query, where } from "@firebase/firestore";

export default function ListarDisciplinas() {
	const [vetor, setVetor] = useState([]);
	const [carregando, setCarregando] = useState(true);
	const [professor, setProfessor] = useState('1');
  
	useEffect(() => {
    retornaDados()
  });

	async function retornaDados(){
		await getDocs(
						query(
							collection(db, 'Disciplina'), 
							where('professor', '==', professor)
						))
			.then( 
			async (snapshot) => {
				for(let i=0; i<snapshot.docs.length; i++){
					const cod = snapshot.docs[i].data().codigo
					await getDocs(
									query(
										collection(db, 'Disciplina', cod, 'Chamada'), 
									))
						.then( 
						async (snapshot2) => {
							for(let i=0; i<snapshot2.docs.length; i++){
								const dado = {
									aula: cod,
									dia: snapshot2.docs[i].id,
								}
								if(carregando) {
									vetor.push(dado)
								}
							}
						}
					)
				}
			}
		)
		if(carregando) {
			//console.log(vetor)
		}
		setCarregando(false)
	}

  return (
		<>
			<Header />
				<center>
					<section className="gerarQrCode">
						<button className="link formatacao">Listar</button>
					</section>
					{
						vetor.map(	
							(val) => (
								<Link to={{
									pathname: "/nova-chamada",
									search: "?aula="+val.aula+"&dia="+val.dia,
								}} className="Link" id="formatacao">{val.aula} - {val.dia}</Link>
							) 
						)
					}
				</center>
			<Footer />
		</>
  ); 
}