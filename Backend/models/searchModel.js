const mongoose = require("mongoose");


//route handler
const searchSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    title:{
        type: String,
        required: true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
})

//export
module.exports = mongoose.model("Search", searchSchema)