require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

// habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

// configuración global de rutas
app.use(require('./routes/index'));

mongoose.connect('mongodb://localhost:27017/cafe', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, (err, res) => {
	if(err) throw err
	console.log('Conectado a la DB')
});

app.listen(process.env.PORT, () => {
	console.log('Servidor en el puerto: 3000');
});