import express from 'express';
import employeeRoute from './user.routes.js';
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

  return router;
};

export default routes;
