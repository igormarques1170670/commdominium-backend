require('dotenv').config({path:'./../commdominium-backend/.env'});
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

const db = require('./database/index.js')
const tipoUsuario = require('./models/userType.js')
const Condominio = require('./models/Condominium.js')
const Usuario = require('./models/User.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

require('./controllers/userTypeController')(app);
require('./controllers/condominiumController')(app);
require('./controllers/userController')(app);
require('./controllers/authController')(app);

app.get('/', (req, res) => {
  res.send('Página Inicial OK!');
});

app.listen(3000);