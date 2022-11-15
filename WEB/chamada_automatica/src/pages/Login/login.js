/* 
A tela de login é responsavel por separar o professor dos alunos.
Atualmente essa distinção é dada por botões, mas no futuro, pode ser implementado da seguinte maneira:
	Alunos logam com o email institucional, ou seja, RA@facens.br, sendo RA um numero de 6 digitos
	Professores logam com o email institucional, ou seja, nome.sobrenome@facens.br, sendo nome e sobrenome strings
	Logo, ao comparar o email, é possivel descobrir se é um aluno ou professor
*/

import React from "react";
import Footer from "../../componentes/Footer/footer";
import { Link } from "react-router-dom";
import './login.css'

export default function Login() {
	return (
		<>
			<div className="centro">

				<section className="aluno">
					<Link to="/alunos" className="link formatacao">Aluno</Link>
				</section>
				<section className="professor">
					<Link to="/conferencia-alunos" className="link formatacao">Professor</Link>
				</section>

			</div>
			<Footer />
		</>
	)
}