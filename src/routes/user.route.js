import userController from '../controller/user.controller.js'; 
import verifyToken from '../middleware/jwt.token.middleware.js'; 
import express from 'express';

const router = express.Router();
router.post('/register', userController.register);
router.post('/login', userController.login);




export default router;

