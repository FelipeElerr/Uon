import alunos from "../models/Aluno.js"

class AlunoController {
	
	static listarAlunos = (req, res) => {
		alunos.find((err, alunos) => {
			res.status(200).json(alunos)
		})
	}

	static cadastrarAluno = (req, res) => {
		let aluno = new alunos(req.body);

		aluno.save((err) => {

			if(err){
				res.status(500).send({message: `${err.message} - falha ao cadastrar aluno.`})
			} 
			else {
				res.status(201).send(aluno.toJSON())
			}
		})

	}

	static presenca = (req, res) => {

		alunos.updateOne({ra:{$eq: req.body.ra}},{presenca: req.body.presenca}, (err) => {
			if(!err) {
				res.status(200).send({message: 'Presença atualizada'})
			}
			else {
				res.status(500).send({message: err.message})
			}
		})
	}

	static presencaGeral = (req, res) => {

		alunos.updateMany({ra:{$eq: req.body.ra}},{presenca:false}, (err) => {
			if(!err) {
				res.status(200).send({message: 'Presença atualizada'})
			}
			else {
				res.status(500).send({message: err.message})
			}
		})
	}

	static excluirAluno = (req, res) => {
		const ra = {ra: req.params.ra};

		alunos.findOneAndDelete(ra, (err) => {
			if(!err){
				res.status(200).send({message: 'Aluno removido com sucesso!'})
			}
			else {
				res.status(500).send({message: err.message})
			}
		})
	}
}

export default AlunoController