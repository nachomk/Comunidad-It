const mongoose = require("mongoose");
const { Schema , model } = mongoose;

// const UserSchema = new Schema ({
//     name : { type: String , required: true},
//     email : String,
//     age : Number
// });

// const User = mongoose.model('User', UserSchema);

const UserSchema = new Schema ({
    name : { type: String , required: true},
    price : Number,
    brand : String,
})

const Products = mongoose.model('Products', UserSchema)

module.exports = Products;