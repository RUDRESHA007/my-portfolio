const express=require("express");
const app = express();
const mongoose=require('mongoose')
const port=5000;
const bodyParser=require("body-parser");
const path =require('path')
const ejs =require('ejs')
mongoose.set('strictQuery', true);

let public_path = path.join(__dirname, '../public')
app.use(express.static(public_path + '/CSS'))
app.use(express.static(public_path + '/js'))
app.use(express.static(public_path + '/tools'))

//dynamiclly pass data using ejs
let html_path = path.join(__dirname, '../views')
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', html_path);

//body parser initialization
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));


//data base connectionie mongodb
require('./db/connection')

app.get('/',(req,res)=>{
    res.render('index.html',{msg:''})
})
app.post('/hire',(req,res)=>{
    const db = mongoose.connection;

    const name=req.body.name
    const email=req.body.email
    const description=req.body.description
    const data={
        'name':name,
        'email':email,
        'description':description
    }
   db.collection('data').insertOne(data, (err, result) => {

    if (err) throw err;
    return res.render("index.html",{msg:'Thank you...!'})
    console.log(result);

 });
})
app.get('/resume',(res,req)=>{
    res.send
})
app.listen(port,()=>{
    console.log('connected at 5000');
})
