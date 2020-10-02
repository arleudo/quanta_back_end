const express = require("express");
const routes = express.Router();
const EmployeeController = require("./controllers/EmployeeController");

// rotas de funcionário
routes.get("/employee", EmployeeController.list);
routes.get("/employee/:id", EmployeeController.show);
routes.post("/employee", EmployeeController.create);
routes.put("/employee/:id", EmployeeController.update);
routes.delete("/employee/:id", EmployeeController.delete);

module.exports = routes;