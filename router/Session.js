const express = require('express');
const router = express.Router();
const Session = require('../controller/Session')

router.get('/', Session.session) 
router.get('/delete',Session.destroySession)

module.exports = router;