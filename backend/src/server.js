//Chamamos o express, que instalamos como dependência
const express = require('express');

//Criamos uma constante que representa o aplicativo usando a função do express
const app = express();

//Criamos a rota que recebe a requisição, e manda uma resposta escrita com o .send
app.get('/', (req, res) => {
    return res.json({ message: "Hello World"});
});

//Definimos a porta que  o servidor vai ouvir
app.listen(3333);