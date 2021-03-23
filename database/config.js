const mongoose = require('mongoose');

const DBConnection = () => {

    try {

        mongoose.connect('mongodb://localhost/jwt', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }, () => {
            console.log('Conectado a la base de datos');

        });



    } catch (error) {


        console.log(error);
        console.log('Error en la BD, ver logs');


    }

}

module.exports = {

    DBConnection

}