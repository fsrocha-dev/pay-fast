//Requisitando a lib express
var express = require('express');
//Requisitando o Consign
var consign = require('consign');

module.exports = function(){	
	var app = express();

	//Padronizando as rotas com consign
	consign()
		.include('controllers')
		.into(app);
	return app;
};

