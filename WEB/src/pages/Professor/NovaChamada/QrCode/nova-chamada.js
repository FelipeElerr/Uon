/*
Essa pagina tem a função de gerar no banco uma nova aula, e copiar da tabela alunos, todos os alunos de uma turma
Atualmente essa página apenas permite a geração do QRCode e exibe os alunos que estão cadastrados
*/

import QrCode from "./qr-code";
import './nova-chamada.css';
import * as React from 'react'
import Header from '../../../../componentes/Header/header'
import Footer from '../../../../componentes/Footer/footer'
import { Link } from "react-router-dom";

export default function ConferenciaAlunos() {

	return (
		<>
			<Header />
			<article>
				<div className="container">
					<section className="info">
						<p>Use a câmera do celular para ler o QR code e garantir sua presença na aula</p>
					</section>
					<section className="qrCode">
						<QrCode />
					</section>
					<section className="gerarQrCode">
						<Link to="/alunos-presentes" className="link formatacao">Finalizar</Link>
					</section>
				</div>
			</article>
			<Footer />
			
		</>


	)
}