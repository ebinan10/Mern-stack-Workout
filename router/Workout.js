const express = require('express');
const Control = require('../controller/Workout')

const router = express.Router()

router.get('/',Control.GetWorkOut)
router.get('/user/workout/:id',Control.GetUserWorkOut)
router.get('/workout/:id',Control.GetEachWorkOut)
router.post('/',Control.CreateWorkOut)
router.patch('/:id',Control.UpdateWorkOut)
router.delete('/:id',Control.DeleteWorkOut)

module.exports = router;