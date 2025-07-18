import mongoose from "mongoose";

const empSchema = mongoose.Schema({
    eid: {
        "type": Number,
        "required": true,
    },
    ename: {
        "type": String,
        "required": true,
    },
    esal: {
        "type": Number,
        "required": true,
    },
    gender: {
        "type": String,
        "required": true,
    }
});

const EmpModel = mongoose.model("Employee", empSchema);
 
export default EmpModel