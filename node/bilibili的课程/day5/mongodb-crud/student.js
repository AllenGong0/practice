// const mongoose = require('mongoose')
// mongoose.connect("mongodb://localhost/test",{useNewUrlParser:true})
// const Schema = mongoose.Schema;


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/student', {useNewUrlParser: true});
var Schema = mongoose.Schema;

const stuSchema = new Schema({
    name:  {
        type:String,
        required:true
    }, // String is shorthand for {type: String}
    age: {
        type:Number,
        required:true
  
    },
    gender:{
        type:Number,
        required:true
    },
    hobbies:{
        type:String,
        required:true
    }
  });
module.exports = mongoose.model('Student', stuSchema);

