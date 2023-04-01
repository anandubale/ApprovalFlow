import express from 'express';
import * as requestController from '../controller/request.controller.js';
import * as employeeAuth from '../middlware/employee.middleware.js'

const router = express.Router();

router.post('/create',employeeAuth.employeeAuth, requestController.ticket_Generation);


export default router;