/*
Esse componente cria a navegação no site pelo uso da url
Assim, acessar http://chamada.cf nos leva ao Login
Assim como, acessar http://chamada.cf/alunos nos leva a pagina que somente os alunos possuem acesso
E assim cada uma das paginas é acessada por meio de links atribuidos aos botões
*/

import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlunosPresentes from "./pages/AlunosPresentes/alunos-presentes";
import NovaChamada from "./pages/QrCode/nova-chamada";
import Login from "./pages/Login/login"
import ListarDisciplinas from "./pages/ListarDisciplinas/listar-disciplinas"
import CadastroDisciplina from "./pages/CadastroDisciplina/cadastro-disciplina"


function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ListarDisciplinas/>} />
				<Route path="/nova-chamada" element={<NovaChamada />} />
				<Route path="/alunos-presentes" element={<AlunosPresentes/>} />
				<Route path="/cadastro-disciplina" element={<CadastroDisciplina/>} />
			</Routes>
		</BrowserRouter>
	)
}
export default Router;