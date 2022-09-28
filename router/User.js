const express = require('express');
const router = express.Router();
const User = require('../controller/User')

router.get('/getuser', User.Login, User.GetUsers)
router.get('/workout/:id',User.Login, User.GetOneUser)
router.post('/',User.Login ,User.CreateUser)
router.post('/login', User.Login)
router.patch('/password/:id',User.Login, User.updateUserPassword )
router.patch('/detail/:id', User.updateUserDetail )
router.delete('/',  )

module.exports = router;   