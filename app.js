const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = 4000;

const mainRouter = require('./routes/');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const homeRouter = require('./routes/main');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use(express.static('pulic'));
app.use('/', mainRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/main', homeRouter);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message);
});

app.listen(PORT, () => {
  console.log(`${PORT} 번에서 실행 중`);
});
