const express = require('express');
const session = require('express-session');
const octokit = require('@octokit/rest');
const randomString = require('randomstring');
const bodyParser = require('body-parser');
const path = require('path');

const indexRouter = require('./app/routes/indexRoutes');
const authRouter = require('./app/routes/authRoutes');
const dashboardRouter = require('./app/routes/dashboardRouter');
const memberRouter = require('./app/routes/memberRoute');
const key = require('./app/config/keys');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'app', 'src')));

app.use(
  session({
    secret: randomString.generate(),
    cookie: {maxAge: 60000},
    resave: false,
    saveUninitialized: false
  })
);


app.use('/auth', authRouter);
app.use('/dashboard', dashboardRouter);
app.use('/members', memberRouter);
app.use('/', indexRouter);
app.listen(key.keys.port, () => {
  console.log('App working at port ' + key.keys.port);
})