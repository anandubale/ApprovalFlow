import  required  from "@hapi/joi/lib/base.js";
import  mongoose  from "mongoose";
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    fullName :{
        type: String
        
    },

    password:{
        type:String
    },

    emailId:{
        type: String
    },

    companyName:{
        String: String
    },

    identification:{
        String: String
    }

})

export default mongoose.model('Employee',employeeSchema)