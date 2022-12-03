/*
Esse componente cria a navegação no site pelo uso da url
Assim, acessar http://chamada.cf nos leva ao Login
Assim como, acessar http://chamada.cf/alunos nos leva a pagina que somente os alunos possuem acesso
E assim cada uma das paginas é acessada por meio de links atribuidos aos botões
*/

import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlunosPresentes from "./pages/Professor/NovaChamada/AlunosPresentes/alunos-presentes";
import NovaChamada from "./pages/Professor/NovaChamada/QrCode/nova-chamada";
import ConferenciaAlunos from "./pages/Professor/NovaChamada/ConferenciaAlunos/conferencia-alunos"
import CadastroDisciplina from "./pages/Professor/NovaChamada/CadastroDisciplina/cadastro-disciplina"
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
        		<Route path="/register" element={<Register />} />
				<Route path="/nova-chamada" element={<NovaChamada />} />
				<Route path="/alunos-presentes" element={<AlunosPresentes/>} />
				<Route path="/conferencia-alunos" element={<ConferenciaAlunos/>} />
				<Route path="/cadastro-disciplina" element={<CadastroDisciplina/>} />
			</Routes>
		</BrowserRouter>
	)
}
export default Router;