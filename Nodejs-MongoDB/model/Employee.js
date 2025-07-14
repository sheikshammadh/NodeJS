import mongoose from "mongoose";
let empSchema=mongoose.Schema({
    eid:{
        "type":Number,
        "required":true,
    },
    ename:{"type":String,
        "required":true,
    },
    esal:{"type":Number,
        "required":true,
    },
    gender:{"type":String,
        "required":true,
    }
})



let emp_Model=mongoose.model("Employee",empSchema)
export default emp_Model;