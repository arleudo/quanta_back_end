const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    function: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    comp: {
        type: String,
        required: false
    },
    neighboor: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: true
    },
    uf: {
        type: String,
        required: false
    },
    zipcode: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

mongoose.model("Employee", EmployeeSchema);