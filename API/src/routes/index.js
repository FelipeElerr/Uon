import express from "express";
import alunos from "./alunosRoute.js"

const routes = (app) => {
	app.use((req, res, next) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
		res.setHeader('Access-Control-Allow-Credentials', true);
		next();
	});

	app.route('/').get((req, res) => {
		res.status(200).send({nome: "API Chamada"})
	})

	app.use(
		express.json(),
		alunos
	)
}

export default routes