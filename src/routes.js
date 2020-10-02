const express = require("express");
const routes = express.Router();
const EmployeeController = require("./controllers/EmployeeController");
const FunctionController = require("./controllers/FunctionController");

// rotas de funcionário
routes.get("/employee", EmployeeController.list);
routes.get("/employee/:id", EmployeeController.show);
routes.post("/employee", EmployeeController.create);
routes.put("/employee/:id", EmployeeController.update);
routes.delete("/employee/:id", EmployeeController.delete);

// rotas de funcionário
routes.get("/function", FunctionController.list);
routes.get("/function/:id", FunctionController.show);
routes.post("/function", FunctionController.create);
routes.put("/function/:id", FunctionController.update);
routes.delete("/function/:id", FunctionController.delete);

module.exports = routes;