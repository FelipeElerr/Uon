import React, {useRef, useState} from "react";
import Header from "../../componentes/Header/header";
import Footer from "../../componentes/Footer/footer";
import { Link } from "react-router-dom";
import './cadastro-disciplina.css';
import db from "../../firebase";
import { addDoc, setDoc, collection, doc, updateDoc } from "@firebase/firestore";
import Combobox from "react-widgets/Combobox";


export default function CadastroDisciplina() {
	const nomeRef = useRef('');
	const codigoRef = useRef('');
	const horarioRef = useRef('');
	const [horario, setHorario] = useState()
	const [hash, setHash] = useState('200333')
	const collecRef = collection(db, "Disciplina")

	const Cadastrar = async(e) =>{
		e.preventDefault();
		console.log(nomeRef.current.value);
		console.log(codigoRef.current.value);

		console.log(horarioRef.current.value);

		let data= {
			codigo: String(codigoRef.current.value),
			nome: String(nomeRef.current.value)
		};

		try{
			setDoc(doc(db, "Disciplina", String(codigoRef.current.value)), data)
			criarNovaAula()
		}catch(error){
			console.log(error)
		}
	}
  //doc(db.collection("Disciplina").document("CP601TIN2").collection("Chamada").document("271122"))

	const criarNovaAula = async () => {
		//console.log('Disciplina', props.code, 'Chamada', props.dia)
		setDoc(doc(db, 'Disciplina', String(codigoRef.current.value), 'Chamada', String(horario)), {
		})
	  };

	  const codigoAulaHoje = () => { //271122
		const date = new Date();
	
		let dd = date.getDate();
		let mm = date.getMonth() + 1;
		let yy = date.getFullYear() - 2000;
	
		let retorno = dd+''+mm+''+yy
	
		return retorno
	  };

	  let Widget=(
		  <Combobox/>
	  )

	return (
		<>
			<Header />
			
			<article className="telaListaAlunos">

				<section className="listaAlunos" id="formatacao" > 
					<form onSubmit={Cadastrar}>
                    <label >
                        Nome Disciplina:
                        <input type="text" name="name" className="input" ref={nomeRef}/>
                    </label>
					<br/>
					<label >
                        Codigo Disciplina:
                        <input type="text" name="codigo" className="input" ref={codigoRef} />
                    </label >
					<br/>
					<label className="label2">
                        Horario Disciplina:
						<Combobox
							//hideCaret
							hideEmptyPopup
							data={["SEG1900", "SEG2100", "TER1900", "TER2100", "QUA1900","QUA2100", "QUI1900", "QUI2100", "SEX1900", "SEX2100"]}
							placeholder="Selecione um horário"
							//value = {horario}
							onChange={value => setHorario(value)}
						
						/>
                    </label>
					<br/>
                    <input type="submit" value="Submit" className="buttonSubmit"/>
					



                    </form>
				</section>

				<section className="gerarQrCode">
					<Link to="/conferencia-alunos" className="Link" id="formatacao">Voltar</Link>
				</section>

			</article>
			<Footer />
		</>
	)
}