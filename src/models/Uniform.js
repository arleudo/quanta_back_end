const mongoose = require("mongoose");

const UniformSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    qtd: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    function: {
        type: String,
        required: true
    },
    disponible: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

mongoose.model("Uniform", UniformSchema);