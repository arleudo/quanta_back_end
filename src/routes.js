const express = require("express");
const routes = express.Router();
const EmployeeController = require("./controllers/EmployeeController");
const FunctionController = require("./controllers/FunctionController");
const ClientController = require("./controllers/ClientController");

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

module.exports = routes;