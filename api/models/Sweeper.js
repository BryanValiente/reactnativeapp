const mongoose = require("mongoose");

const SweeperSchema = new mongoose.Schema({
    start_time:{
        type: Number,
        required: true
    },
    end_time:{
        type: Number,
        required: true
    },
    street: {
        type: String,
        required: true
    }
},{timestamps: true});

module.exports = mongoose.model("Sweeper", SweeperSchema);