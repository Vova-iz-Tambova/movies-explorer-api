const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Поле не может быть пустым'],
    unique: [true, 'Данный "email" уже используется'],
    validate: {
      validator: (email) => validator.isEmail(email),
      message: 'Некорректный email',
    },
  },
  password: {
    type: String,
    required: [true, 'Поле не может быть пустым'],
    select: false,
  },
  name: {
    type: String,
    required: [true, 'Поле не может быть пустым'],
    minlength: [2, 'Минимальная длина поля "name" - 2'],
    maxlength: [30, 'Максимальная длина поля "name" - 30'],
  },
}, { versionKey: false });

module.exports = mongoose.model('user', userSchema);
