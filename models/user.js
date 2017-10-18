// Import required modules.
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create the Schema
var userSchema = new Schema({
    
    firstname: { type: String, unique: true },
    lastname: { type: String },
    email: { type: String },
    username: { type: String },
    password: { type: String },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date }
});

// we need to create a model for using schema
var User = mongoose.model('user', userSchema);

// make this available to our employee in our Node applications
module.exports = User;
