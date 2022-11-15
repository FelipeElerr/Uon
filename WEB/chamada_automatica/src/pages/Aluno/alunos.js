/* 
Devido a ausencia do login, é necessario que temporariamente exista um campo email. 
O aluno deve preencher esse campo para que a presença seja computada pelo RA
*/

import React from "react";
import QRCodeReader from './QRCodeReader';

export default function Alunos(){
	return(
	<div className="App">
		<header className="App-header" id="header">
				<label htmlFor="email">E-mail</label>
				<input type="email" name="email" id="email" />
				{/* <p>Usuário: {user?.login}</p>
				<p>Biografia: {user?.bio}</p> */}
		</header>
		<QRCodeReader />
	</div>
	)
}