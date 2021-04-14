const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require ('path');
const puerto = process.env.PORT;

app.use(express.static('public'));

app.set('view engine' ,'ejs')

app.get('/' , (req,res) => {
    res.render('index')
});

app.get('/register' , (req,res) => 
{
    res.render('register')
});

app.get('/login' , (req,res) => 
{
    res.render('login')
})





app.listen(puerto || 3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});