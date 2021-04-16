const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require ('path');
const puerto = process.env.PORT;
app.use(express.static('public'));


//dodnde estan los gerentes de ruteo
const indexRouter = require('./routes/indexRouter');
/*
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
*/

app.set('view engine', 'ejs');

// llamo al ruteo

app.use('/' , indexRouter);

/*
app.use('/' , userRouter);
app.use('/' , productRouter);
*/



app.listen(puerto || 3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});