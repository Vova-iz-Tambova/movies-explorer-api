const router = require('express').Router();
const auth = require('../middlewares/auth');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const NotFoundError = require('../errors/not-found-err');
const { createUser, login } = require('../controllers/users');
const {
  createUserRequestValidation,
  loginRequestValidation,
} = require('../middlewares/validation');

router.post('/signup', createUserRequestValidation, createUser);
router.post('/signin', loginRequestValidation, login);

router.use(auth);

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

router.use('*', () => {
  throw new NotFoundError('Страница не найдена');
});

module.exports = router;
