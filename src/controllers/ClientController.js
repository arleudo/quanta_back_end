//imports
const mongoose = require('mongoose');
const Client = mongoose.model("Client");

//conexão com o banco
const url = "mongodb://localhost:27017/quanta";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true })

//funções de acesso ao banco
module.exports = {

    async list(req, res) {
        const clients = await Client.find();
        console.log("Listando clientes");
        return res.json(clients);
    },

    async create(req, res) {
        const client = await Client.create(req.body);
        console.log("Criando cliente");
        console.log(client);
        return res.json(client);
    },

    async show(req, res) {
        console.log("Buscando cliente");
        const client = await Client.findById(req.params.id);
        console.log(client);
        return res.json(client);
    },

    async update(req, res) {
        console.log("Atualizando cliente");
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, {new:true});
        console.log(client);
        return res.json(client);
    },

    async delete(req, res) {
        console.log("Deletando cliente");
        const client = await Client.findByIdAndRemove(req.params.id);
        return res.send();
    },
};