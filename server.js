//imports
const express = require("express");
const app = express();
const cors = require("cors");

//models
require("./src/models/Client");
require("./src/models/Employee");
require("./src/models/Functions");
require("./src/models/Uniform");


//uses
app.use(cors());
app.use(express.json());
app.use('/qnt/', require("./src/routes"));

//start server
app.listen(7777, function () {
    console.log("Server running!");
});