const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const {
  createMovieRequestValidation,
  deleteMovieRequestValidation,
} = require('../middlewares/validation');

router.get('/', getMovies);
router.post('/', createMovieRequestValidation, createMovie);
router.delete('/:id', deleteMovieRequestValidation, deleteMovie);

module.exports = router;
