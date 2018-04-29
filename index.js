//Chamando arquivo de configuracao do express.
var app = require('./config/custom-express.js')();

//Rodando servidor na porta 3000.
app.listen(3000, function(){
	console.log("Servidor rodando");
});