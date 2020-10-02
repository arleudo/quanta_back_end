//imports
const mongoose = require('mongoose');
const Function = mongoose.model("Function");

//conexão com o banco
const url = "mongodb://localhost:27017/quanta";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true })

//funções de acesso ao banco
module.exports = {

    async list(req, res) {
        const functions = await Function.find();
        console.log("Listando funções");
        return res.json(functions);
    },

    async create(req, res) {
        const funcao = await Function.create(req.body);
        console.log("Criando função");
        console.log(funcao);
        return res.json(funcao);
    },

    async show(req, res) {
        console.log("Buscando função");
        const funcao = await Function.findById(req.params.id);
        console.log(funcao);
        return res.json(funcao);
    },

    async update(req, res) {
        console.log("Atualizando função");
        const funcao = await Function.findByIdAndUpdate(req.params.id, req.body, {new:true});
        console.log(funcao);
        return res.json(funcao);
    },

    async delete(req, res) {
        console.log("Deletando função");
        const funcao = await Function.findByIdAndRemove(req.params.id);
        return res.send();
    },
};