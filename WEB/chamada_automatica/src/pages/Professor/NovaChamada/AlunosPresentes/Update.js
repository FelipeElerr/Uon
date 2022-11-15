/*
Essa função é responsavel por atualizar no banco as presenças apontadas pelas checkbox
Isso permite que o professor possa aplicar presença para um aluno que teve problemas técnicos durante a leitura do QR
Serve como uma chamada manual, assim como é feita atualmente no sistema da faculdade
*/
import axios from 'axios'
import React from 'react'
import { url } from '../../../api-url.js'

export default function Update() {
	function update(){
		axios.get(`${url}/alunos`)
    .then((response)=>{
			response.data.forEach(element => {
				let check = document.getElementById(element.ra)
				axios.put(`${url}/alunos/presenca`,{
						"ra": element.ra,
						"qrcode": "decodedText",
						"presenca": check.checked
					})
				.then((response)=>{
				})
			});
    })
	}

	return (
		<>
		<div onClick={update}>Atualizar</div>
		</>
	)
}