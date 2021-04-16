let express = require('express');
let router = express.Router();
const controlador = require('../controller/indexController');


router.get('/' , (req,res) => {
    //leo todo  el array de productos en el controlador homeController
    const products = controlador.leerTodos();
    //envio el array prodcut a la vista para que la recorra EJS
    console.log("Volvi del controlador")
    res.render('index' , {products});
})




module.exports = router;