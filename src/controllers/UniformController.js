//imports
const mongoose = require('mongoose');
const Uniform = mongoose.model("Uniform");

//conexão com o banco
const url = "mongodb://localhost:27017/quanta";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true })

//funções de acesso ao banco
module.exports = {

    async list(req, res) {
        const uniforms = await Uniform.find();
        console.log("Listando uniforms");
        return res.json(uniforms);
    },

    async create(req, res) {
        const uniform = await Uniform.create(req.body);
        console.log("Criando uniforme");
        console.log(uniform);
        return res.json(uniform);
    },

    async show(req, res) {
        console.log("Buscando uniforme");
        const uniform = await Uniform.findById(req.params.id);
        console.log(uniform);
        return res.json(uniform);
    },

    async update(req, res) {
        console.log("Atualizando uniforme");
        const uniform = await Uniform.findByIdAndUpdate(req.params.id, req.body, {new:true});
        console.log(uniform);
        return res.json(uniform);
    },

    async delete(req, res) {
        console.log("Deletando uniforme");
        const uniform = await Uniform.findByIdAndRemove(req.params.id);
        return res.send();
    },
};