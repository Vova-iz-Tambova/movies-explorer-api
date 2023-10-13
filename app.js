const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const router = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();
app.use(requestLogger);
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/bitfilmsdb');

app.use(router);

app.use(errorLogger);
app.use(errors());

app.listen(3000);
