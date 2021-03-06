//Requires
var express = require('express');
var mongoose = require('mongoose');

//Inicializar variables
var app = express();

//Conexión Base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, resp) => {
    if( err ) throw err;
    console.log(`Base de datos: \x1b[32m%s\x1b[0m`, `online`);
})

//Rutas
app.get('/', (req, res, next) => {

    //Lo hizo todo correctamente
    res.status(200).json({
        ok: true,
        mensaje: 'Uribe paraco hijueputa',
        data: [{
            id: 1,
            nombre: 'Alvaro y Escobar'
        }]
    });
})

//Escuchar peticiones
app.listen(3000, () => {
    console.log(`Express server corriendo en el puerto 3000: \x1b[32m%s\x1b[0m`, `online`);
    console.log(`Node/Express: \x1b[32m%s\x1b[0m`, 'online');
});
