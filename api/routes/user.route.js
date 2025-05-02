import express from 'express';

import userController from '../controller/user.controller.js';

const router = express.Router();

router.post('/register',userController.register);


const router = express.Router();

router.post('register', async (req, res) => {

});


export default router;