const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const NotFoundError = require('./errors/not-found-err');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/bitfilmsdb');

app.use(errors());
app.use('*', () => {
  throw new NotFoundError('Страница не найдена');
});

app.listen(3000);
