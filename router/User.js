const express = require('express');
const router = express.Router();
const User = require('../controller/User');
const VerifyAccessToken =require('../controller/RefreshToken');
const verify = VerifyAccessToken.VerifyAccessToken;

router.get('/getuser',verify, User.GetUsers)
router.get('/:id', verify , User.GetOneUser)
router.post('/' , User.CreateUser)
router.post('/login' , User.Login)
router.patch('/password/:token'  , User.updateUserPassword )
router.patch('/detail/:id', verify ,User.updateUserDetail )
router.post('/password/token', User.SendPasswordToken )
module.exports = router;   