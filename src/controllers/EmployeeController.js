//imports
const mongoose = require('mongoose');
const Employee = mongoose.model("Employee");

//conexão com o banco
const url = "mongodb://localhost:27017/quanta";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true })

//funções de acesso ao banco
module.exports = {

    async list(req, res) {
        const employees = await Employee.find();
        console.log("Listando funcionários");
        return res.json(employees);
    },

    async create(req, res) {
        const employee = await Employee.create(req.body);
        console.log("Criando funcionário");
        console.log(employee);
        return res.json(employee);
    },

    async show(req, res) {
        console.log("Buscando funcionario");
        const employee = await Employee.findById(req.params.id);
        console.log(employee);
        return res.json(employee);
    },

    async update(req, res) {
        console.log("Atualizando funcionário");
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {new:true});
        console.log(employee);
        return res.json(employee);
    },

    async delete(req, res) {
        console.log("Deletando funcionário");
        const employee = await Employee.findByIdAndRemove(req.params.id);
        return res.send();
    },
};