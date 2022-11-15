import mongoose from "mongoose";

const alunoSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        ra: {type: Number, required: true},
        presenca: {type: Boolean, required: true}
    },
    {
        versionKey: false
    }
);

const alunos = mongoose.model('alunos', alunoSchema);

export default alunos;