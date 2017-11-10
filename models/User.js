const mongoose = require('mongoose');
//const Schema = mongoose.Schema with es6 we can write
const { Schema } = mongoose;

const userSchema = new Schema ({
    googleId : String,
    name: String
});
// 1 arugu name of collections, 2 argu is userschema
mongoose.model('users', userSchema);