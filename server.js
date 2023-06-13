// Required modules. 
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');

const path = require('path');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Initialize application with express, and handlebars.
const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });

// Session cookies. 
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));

// Handlebars.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Express middleware.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('front'))

// API routes.
app.use(routes);

// Sequelize; listen on .env PORT or port 3001. 
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Wahoo! App Now listening at port 3001'));
});

