const mongoose = require('mongoose');

// Définition du schéma utilisateur
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true }
});

// Exportation du modèle utilisateur
module.exports = mongoose.model('User', UserSchema);
