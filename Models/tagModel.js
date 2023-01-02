const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    tag:{
        type : String, 
        required:true
    }
}, { timestamps: true });

module.exports = mongoose.model("tag", tagSchema)