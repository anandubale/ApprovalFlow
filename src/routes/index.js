import express from 'express';
import employeeRoute from './employee.routes.js';
import requstRoutes from './request.routes.js';
const router = express.Router();
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });

  router.use('/employee',employeeRoute);
  router.use('/ticket',requstRoutes);


  return router;
};

export default routes;
