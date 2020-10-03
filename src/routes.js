const express = require("express");
const routes = express.Router();
const EmployeeController = require("./controllers/EmployeeController");
const FunctionController = require("./controllers/FunctionController");
const ClientController = require("./controllers/ClientController");
const UniformController = require("./controllers/UniformController");

// rotas de funcionário
routes.get("/employee", EmployeeController.list);
routes.get("/employee/:id", EmployeeController.show);
routes.post("/employee", EmployeeController.create);
routes.put("/employee/:id", EmployeeController.update);
routes.delete("/employee/:id", EmployeeController.delete);

// rotas dos cargos
routes.get("/function", FunctionController.list);
routes.get("/function/:id", FunctionController.show);
routes.post("/function", FunctionController.create);
routes.put("/function/:id", FunctionController.update);
routes.delete("/function/:id", FunctionController.delete);

// rotas dos clientes
routes.get("/client", ClientController.list);
routes.get("/client/:id", ClientController.show);
routes.post("/client", ClientController.create);
routes.put("/client/:id", ClientController.update);
routes.delete("/client/:id", ClientController.delete);

// rotas dos uniformes
routes.get("/uniform", UniformController.list);
routes.get("/uniform/:id", UniformController.show);
routes.post("/uniform", UniformController.create);
routes.put("/uniform/:id", UniformController.update);
routes.delete("/uniform/:id", UniformController.delete);

module.exports = routes;