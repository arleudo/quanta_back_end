const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
    social_name: {
        type: String,
        required: true
    },
    fantasy_name: {
        type: String,
        required: true
    },
    cnpj: {
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

mongoose.model("Client", ClientSchema);