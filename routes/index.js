const router = require('express').Router();
const auth = require('../middlewares/auth');
const { getUser, updateUser } = require('../controllers/users');
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');

router.get('/users/me', auth, getUser);
router.patch('/users/me', auth, updateUser);

router.get('/movies', auth, getMovies);
router.post('/movies', auth, createMovie);
router.delete('/movies/_id', auth, deleteMovie);

module.exports = router;
