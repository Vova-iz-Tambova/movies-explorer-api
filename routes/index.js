const router = require('express').Router();
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/not-found-err');
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const {
  getUser, updateUser, createUser, login,
} = require('../controllers/users');

router.post('/signup', createUser);
router.post('/signin', login);

router.use(auth);

router.get('/users/me', getUser);
router.patch('/users/me', updateUser);

router.get('/movies', getMovies);
router.post('/movies', createMovie);
router.delete('/movies/:movieId', deleteMovie);

router.use('*', () => {
  throw new NotFoundError('Страница не найдена');
});
module.exports = router;
