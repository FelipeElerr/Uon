/*
Essa função é responsavel por atualizar as checkbox das presenças baseado nas presenças do banco
*/
import axios from 'axios'
import React from 'react'
import { url } from '../../../api-url.js'

export default function Request() {
	function request(){
		axios.get(`${url}/alunos`)
    .then((response)=>{
			response.data.forEach(element => {
				if(element.presenca){
					let check = document.getElementById(element.ra)
					check.checked = true
				}
			});
    })
	}
	
	React.useEffect(() => {
    request();
  },[]);

	return (
		<>
		
		</>
	)
}