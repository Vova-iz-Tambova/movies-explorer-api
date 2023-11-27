const router = require('express').Router();
const { getUser, updateUser } = require('../controllers/users');
const {
  updateUserRequestValidation,
} = require('../middlewares/validation');

router.get('/me', getUser);
router.patch('/me', updateUserRequestValidation, updateUser);

module.exports = router;
