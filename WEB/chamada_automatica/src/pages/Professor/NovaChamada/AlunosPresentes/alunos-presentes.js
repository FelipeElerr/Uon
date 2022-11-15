import React from "react";
import Header from "../../../../componentes/Header/header";
import Footer from "../../../../componentes/Footer/footer";
import { Link } from "react-router-dom";
import './alunos-presentes.css';
import Request from './Request.js';
import Update from './Update.js';



export default function AlunosPresentes() {
	return (
		<>
			<Request />
			<Header />
			<article className="opcaoChamada" >
				<section className="novaChamada" id="formatacao">
					<p>
						Nova chamada
					</p>
				</section>
				<section className="historicoChamada" id="formatacao">
					<p>
						Histórico de chamadas
					</p>
				</section>
			</article>
			<article className="telaListaAlunos">
				<section className="sala" id="formatacao">
					<p>
						UP013TIN1
					</p>
				</section>

				<section className="listaAlunos" id="formatacao" >
					<ul>
						<li>
							<input type="checkbox" className="checkbox" id="200831" name="alunos" value={200831}></input>Alex Shoiti Hashida Guerra</li>
						<li>
							<input type="checkbox" className="checkbox" id="200738" name="alunos" value={200835}></input>Felipe Eler de Oliveira Machado</li>
						<li>
							<input type="checkbox" className="checkbox" id="200574" name="alunos" value={200721}></input>Felipe Victorino Sarubo</li>
						<li>
							<input type="checkbox" className="checkbox" id="200333" name="alunos" value={200154}></input>Gabriel Mancio Manco de Camargo</li>
						<li>
							<input type="checkbox" className="checkbox" id="200343" name="alunos" value={200489}></input>Laura Cecilia Ferreira Soares da Silva</li>
						<li>
							<input type="checkbox" className="checkbox" id="200347" name="alunos" value={200358}></input>Matheus Carvalho Patriarca de Pascho</li>
						<li>
							<input type="checkbox" className="checkbox" id="200767" name="alunos" value={200288}></input>Rafael Henrique Lavagnini</li>
					</ul>
				</section>

				<section className="gerarQrCode">
					{/* <button className="calcular" id="formatacao">
						<Calcular />
					</button> */}

					<button className="link formatacao calcular">
						<Update />
					</button>
				</section>

				<section className="gerarQrCode">
					<Link to="/" className="link formatacao">Finalizar</Link>
				</section>

			</article>
			<Footer />
		</>
	)
}