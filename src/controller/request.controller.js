import * as RequestService from "../services/request.service.js"
import HttpStatus from 'http-status-codes';
import http  from 'winston';

export const ticket_Generation = async (req,res)=>{
    try{    
        console.log("ticket_Controller");
        const data = await RequestService.Request_Generation(req.body)
            res.status(HttpStatus.CREATED).json({
                code:HttpStatus.CREATED,
                data: data,
                message:"Ticket is Created Successfully"
            });
    }catch(error){
        res.status(HttpStatus.CONFLICT).json({
            code: HttpStatus.CONFLICT,
            message:`${error}`
        })
    }

}


export const login = async (req, res) => {
  try { 
    console.log("login")
    const data = await EmployeeService.login(req.body);
    if(data == null) { 
      res.status(HttpStatus.NOT_FOUND).json({
        code : HttpStatus.NOT_FOUND,
        message : `${error}`
      })
    }
    else{
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'login Successfully'
      }); 
    }  
  
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code : HttpStatus.BAD_REQUEST,
      message :  `${error}`
    })
  }
};