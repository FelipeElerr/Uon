import React from "react";
import Header from "../../componentes/Header/header";
import Footer from "../../componentes/Footer/footer";
import { Link } from "react-router-dom";
import './alunos-presentes.css';

export default function AlunosPresentes() {
	return (
		<>
			<Header />
			<article className="telaListaAlunos">
				<section className="sala" id="formatacao">
					
				</section>

				<section className="listaAlunos" id="formatacao" >
					<ul>
						
					</ul>
				</section>

				<section className="gerarQrCode">
					<Link to="/listar-disciplinas" className="link formatacao">Finalizar</Link>
				</section>

			</article>
			<Footer />
		</>
	)
}