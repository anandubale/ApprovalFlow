import  {Request} from "../model/Request.model.js";
import  { Employee } from "../model/Request.model.js";

import  {Enum_Request_Status } from "../utils/requestStatus.js"

/**
 * Service for Request Creation
 */

export const Request_Generation = async(body)=>{

    console.log("Request Service");

    //Creating request with status
    body.Status = Enum_Request_Status.REQUESTED;

    // //Need to assigned to next person this need to get from UserId
    var assignedTo = [];
        console.log("checking for assigned user....");
    assignedTo = await Employee.findOne()
    if(assignedTo = null){
        throw new error("No one to assigned ticket to");
    }
    else{
        console.log("we have find assigned users")
        body.assignedTo = assignedTo;
    }
    //Need to detect the login user which creates the Request and pass it to:-]
    console.log(body.employeeId)
    body.RequestedBy = body.employeeId

    const data = Request.create(body);
    console.log("Request is Created, hurray!!")
    return data;
    

}

/**
 * Service to Login Employee in Portal
 */


