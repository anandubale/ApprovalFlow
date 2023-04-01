import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import  {Enum_Request_Status } from '../utils/requestStatus.js'



const employeeSchema = Schema({
    fullName :{
        type: String,
        required : true
        
    },

    password:{
        type:String,
        required : true
    },

    emailId:{
        type: String,
        required : true
    },

    companyName:{
        type: String,
        required : true
    },

    identification:{
        type: String,
        required : true
    },

    canAssignedTo :[{
        type : Schema.Types.ObjectId , ref : 'Employee',
        required : true

    }],

});



const RequestSchema =  Schema({
    name: {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    quntity : {
        type : Number,
        required : true
    },

    budget :{
        type: Number,
        required : true
    },


    requestedBy :[{
        type : Schema.Types.ObjectId , ref : 'Employee'
    }],

    assignedTo :[{
        type : Schema.Types.ObjectId , ref : 'Employee',
        required : true
    }],

    status: {
        type : Enum_Request_Status
    },

    createdDate : {
        type: Date,
        default : Date.now
    },

    updatedDate : {
        type: Date,
        default : Date.now

    }



})



export const Employee = mongoose.model('Employee',employeeSchema)

export const Request = mongoose.model('Request',RequestSchema)  