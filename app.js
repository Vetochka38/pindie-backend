const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require("cookie-parser");

const connectToDatabase = require('./database/connect');
const { cors } = require('./middlewares');
const apiRouter = require('./routes/apiRouter');
const pagesRouter = require('./routes/pages');

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, 'public')),
);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

// node app.js для проверки
//
// ДЛЯ ОТПРАВКИ:
// git pull __ синхронизация
// git add -A __ Добавление изменений
// git commit -m "" __ Комментарий к изменениям
// git push origin 'reviev-branch' __ отправка изменений на Гитхаб