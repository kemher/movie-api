const express = require('express');
const auth = require('../auth');
const userController = require('../controllers/user');
const router = express.Router();

// add user
router.post('/signUp', (req, res) => {

	userController.signUp(req.body).then(resultFromController => res.send(resultFromController))
})

//set admin
router.put('/admin', auth.verify, (req, res) => {
	userData = auth.decode(req.headers.authorization)  

	userController.setupAdmin(req.params.id).then(resultFromController => res.send(resultFromController))
})


module.exports = router;