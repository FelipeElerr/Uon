/*
Header é um componente que cria o cabeçalho de nosso sistema
*/

import React from "react"
import { AiOutlineUser, AiOutlineSolution } from "react-icons/ai"
import './header.css'

export default function Header(){
	return(
		<header>
			<div id="cabecalho">
				<div className="titulo">
					<p>Chamada Automática</p>
				</div>
				<div id="iconeLista">
					<AiOutlineSolution />
				</div>
			</div>

			<div className="menu">
				<div id="iconeUsuario">
					<AiOutlineUser />
				</div>
			</div>
	</header>
	)
}




