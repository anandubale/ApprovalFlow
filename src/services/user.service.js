
import bcrypt from  "bcrypt";
import  jwt  from "jsonwebtoken";

import Employee from "../model/user.model.js";

/**
 * Service for Employee Registration
 */

export const employee_Registration = async(body)=>{

            console.log("EMP_sERVICE");

    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(body.password,saltRounds);
    body.password = hashedPassword;
    const email_Check = await Employee.findOne({emailId:body.emailId});
    if(email_Check != null){
        throw new Error("Employee already registered");
    } 
    else{
        
        const data = Employee.create(body);
        console.log("EMployee is Created, hurray!!")
        return data;
    }

}

/**
 * Service to Login Employee in Portal
 */


export const login = async(body)=>{
    const find_Emp = await Employee.findOne({emailId:body.emailId});
    const validPassword = bcrypt.compareSync(body.password,find_Emp.password)
    console.log("We come till here" + validPassword)
    if(validPassword){
        const data = jwt.sign({"emailId":Employee.emailId,"id":Employee._id}, process.env.LOGIN_SECRET_CODE);
        return data;
    }

    else{
        throw new Error("password is not correct");
    }
}