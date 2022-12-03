/*
Essa pagina tem a função de gerar no banco uma nova aula, e copiar da tabela alunos, todos os alunos de uma turma
Atualmente essa página apenas permite a geração do QRCode e exibe os alunos que estão cadastrados
*/

import QrCode from "./qr-code";
import './nova-chamada.css';
import React, { useState, useEffect } from 'react'
import Header from '../../componentes/Header/header'
import Footer from '../../componentes/Footer/footer'
import { Link } from "react-router-dom";

export default function NovaChamada() {
	const [carregando, setCarregando] = useState(true);
	const [aula, setAula] = useState();
	const [dia, setDia] = useState();

	useEffect(() => {
    getQueryVariable()
		
  });

	function getQueryVariable()
	{
		var query = window.location.search.substring(1);
		var vars = query.split("&");

		for (var i=0; i<vars.length; i++) {
			var pair = vars[i].split("=");

			if(pair[0] == 'aula'){
				setAula(pair[1]);
			}
			if(pair[0] == 'dia'){
				setDia(pair[1]);
			}
		}
		setCarregando(false)
	}

	if(carregando){
		return (<div className="App">Loading...</div>);
	}

	return (
		<>
			<Header />
			<article>
				<div className="container">
					<section className="info">
						<p>Use a câmera do celular para ler o QR code e garantir sua presença na aula</p>
					</section>
					<section className="qrCode">
						<QrCode aula={aula} dia={dia} />
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