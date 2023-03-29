import * as EmployeeService from '../services/user.service.js';
import HttpStatus from 'http-status-codes';
import http  from 'winston';

export const employee_Registration = async (req,res)=>{
    try{    
        console.log("emp_Controller");
        const data = await EmployeeService.employee_Registration(req.body)
            res.status(HttpStatus.CREATED).json({
                code:HttpStatus.CREATED,
                data: data,
                message:"Employee is Created Successfully"
            });
    }catch(error){
        res.status(HttpStatus.CONFLICT).json({
            code: HttpStatus.CONFLICT,
            message:`${error}`
        })
    }

}


export const login = async (req,res)=>{
    try {
        const data = await EmployeeService.login(req.body);
        if(data = null){
            res.status(HttpStatus.NOT_FOUND).json({
                code:HttpStatus.NOT_FOUND,
                message:`${error}`
            })
        }
        else{
            res.status(HttpStatus.OK).json({
                code:HttpStatus.OK,
                data: data,
                message:"login successfully"
            });
        }

    } catch (error) {

        res.status(HttpStatus.BAD_REQUEST).json({
                code:HttpStatus.BAD_REQUEST,
                data: data,
                message:`${error}`
            });
        
    }
}