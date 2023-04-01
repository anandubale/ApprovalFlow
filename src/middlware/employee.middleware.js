import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


export const employeeAuth = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization')
    // let bearerToken = req.body.headers.Authorization
    console.log(bearerToken)
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'  

      };
    bearerToken = bearerToken.split(' ')[1]
    jwt.verify(bearerToken, process.env.LOGIN_SECRET_CODE,(err,verifedtoken)=>{
      if (err)
      throw {
        code: HttpStatus.UNAUTHORIZED,
        message: 'User dont have access to this Requests '
      };
      else{
        // req.body.data = verifedtoken; //this verified token will have email id ,id
        // req.body['UserID'] = req.body.data.id
        req.body['data'] = verifedtoken;  
        req.body.employeeId = req.body.data.id; 
        console.log("this is employeeid", req.body.employeeId)
        next();
      }
    });
  } catch (error) {
    next(error);
  }
};

