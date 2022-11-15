import express from "express";
import AlunoController from "../controllers/alunosController.js";

const router = express.Router();

router
    .get("/alunos", AlunoController.listarAlunos)
    .post("/alunos", AlunoController.cadastrarAluno)
    .put("/alunos/presenca", AlunoController.presenca)
    .put("/alunos/presenca/geral", AlunoController.presencaGeral)
    .delete("/alunos/:ra", AlunoController.excluirAluno)

export default router;