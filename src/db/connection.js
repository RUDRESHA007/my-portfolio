
const mongoose = require('mongoose');

try{
   mongoose.connect('mongodb+srv://power:Rudra007@cluster0.0rgsp.mongodb.net/my_web?retryWrites=true&w=majority');
   console.log("connection sucessfull")
}
catch{  
    console.log("connection error")
}

