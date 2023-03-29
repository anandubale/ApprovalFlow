import express from 'express';
import * as employeeController from '../controller/employee.controller.js';

const router = express.Router();

router.post('/register', employeeController.employee_Registration);
router.post('/login',employeeController.login);


export default router;