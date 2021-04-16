const visitados = require('../data/datosProductos');


let controlador = {
    leerTodos : function (){
        console.log('leo productos desde data');
        return visitados;
    }
}



module.exports =  controlador;





