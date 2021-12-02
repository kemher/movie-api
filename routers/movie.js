const express = require('express');
const movieController = require('../controllers/movie')
const router = express.Router();


// add movie
router.post('/addMovie', (req, res) => {
	userData = auth.decode(req.headers.authorization) 

	if(userData.isAdmin !== true) {
		return ('Not Authorized.')

	} else {
		movieController.addMovie(req.body).then(resultFromController => res.send(resultFromController))
	}
})

// all movies
router.get('/all', (req, res) => {
	userData = auth.decode(req.headers.authorization) 

	if(userData.isAdmin !== true) {
		return ('Not Authorized')

	} else {
		movieController.allMovies(req.body).then(resultFromController => res.send(resultFromController))	
	}
})

// all active movies
router.get('/nowShowing', (req, res) => {
	userData = auth.decode(req.headers.authorization) 

	if(userData.isAdmin !== true){
		return ('Not Authorized')

	} else {
		movieController.activeMovies(req.body).then(resultFromController => res.send(resultFromController))
	}

})

// update a movie
router.put('/:id/update', (req, res) => {
	userData = auth.decode(req.headers.authorization) 

	if(userData.isAdmin !== true) {
		return ('Not Authorized')

	} else {
		movieController.movieUpdate(req.params.id, req.body).then(resultFromController => res.send(resultFromController))
	}

})

// archive a movie
router.put('/:id/archive', (req, res) => {
	userData = auth.decode(req.headers.authorization) 

	if(userData.isAdmin !== true) {
		return ('Not Authorized')

	} else {
		movieController.archivedMovie(req.params.id, req.body).then(resultFromController => res.send(resultFromController))
	}

})

// deleting a movie
router.delete('/:id/delete', (req, res) => {
	userData = auth.decode(req.headers.authorization) 

	if(userData.isAdmin !== true) {
		return ('Not Authorized')

	} else {
		movieController.deleteMovie(req.params.id).then(resultFromController => res.send(resultFromController))
	}

})


module.exports = router;