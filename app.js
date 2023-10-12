const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const NotFoundError = require('./errors/not-found-err');
const router = require('./routes/index');

const app = express();
app.use(express.json());
// app.use((req, res, next) => {
//   req.user = {
//     _id: '6527f77d6984af376efe4052',
//   };
//   next();
// });

mongoose.connect('mongodb://127.0.0.1:27017/bitfilmsdb');

app.use(router);
app.use(errors());
app.use('*', () => {
  throw new NotFoundError('Страница не найдена');
});

app.listen(3000);
