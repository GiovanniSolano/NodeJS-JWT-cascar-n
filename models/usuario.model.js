const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');



const usuarioSchema = new Schema({

    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

});


usuarioSchema.method('toJSON', function() {
    const { __v, password, ...object } = this.toObject();
    return object;
});

module.exports = mongoose.model('Usuario', usuarioSchema);