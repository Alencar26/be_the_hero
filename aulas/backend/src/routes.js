// importando funcionalidades do express e jogando na variável
const express = require('express');

// importando os controllers
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentsControllers');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//pegando a funcionalidade de rotas do express e jogando na variável routes
const routes = express.Router();

//rotas de login (sessão)
routes.post('/sessions', SessionController.create);

//rotas de criação e listagem das ongs
routes.get('/ongs', OngController.indenx);
routes.post('/ongs', OngController.create);

// Rotas de casos específicos de determinadas ongs
routes.get('/profile', ProfileController.index);

//rotras das criações e listagens e deletes dos incidents(casos)
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

 module.exports = routes;