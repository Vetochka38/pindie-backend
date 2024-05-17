const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const usersRouter = require('./routes/users');
const gamesRouter = require('./routes/games');
const categoriesRouter = require('./routes/categories');

const connectToDatabase = require('./database/connect');
const { cors } = require('./middlewares');

const app = express();
const PORT = 3000;

connectToDatabase();

app.use(
  cors, 
  bodyParser.json(),
  express.static(path.join(__dirname, 'public')),
  usersRouter, 
  gamesRouter, 
  categoriesRouter
);

app.listen(PORT, () => {
    // Если всё работает, консоль покажет, какой порт приложение слушает
    console.log(`App listening on port ${PORT}`)
})

// node app.js для проверки
// 
// ДЛЯ ОТПРАВКИ:
// git pull __ синхронизация
// git add -A __ Добавление изменений
// git commit -m "" __ Комментарий к изменениям
// git push origin reviev-branch __ отправка изменений на Гитхаб