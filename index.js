//Requisitando a lib express
var express = require('express');
//Instanciando o express
var app = express();

app.get('/teste', function(req, res){
	res.send('Resposta Teste');
});

//Rodando servidor na porta 3000
app.listen(3000, function(){
	console.log("Servidor rodando");
});