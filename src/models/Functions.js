const mongoose = require("mongoose");

const FunctionsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },    
    created_at: {
        type: Date,
        default: Date.now
    },
});

mongoose.model("Function", FunctionsSchema);