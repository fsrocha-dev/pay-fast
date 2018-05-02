//Requisitando a lib express
var express = require('express');
//Requisitando o Consign
var consign = require('consign');
//Requisitando o Body-parser
var bodyParser = require('body-parser');

module.exports = function(){	
	var app = express();

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	//Padronizando as rotas com consign
	consign()
		.include('controllers')
		.into(app);
	return app;
};

