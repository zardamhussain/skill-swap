const express = require("express");
const app = express();
const path = require("path")
const bodyParser = require('body-parser')
// const signin = require("./firebase")
app.use(express.static(path.join(__dirname,"public")))
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.status(200).sendFile(__dirname.split('backend')[0] + 'index.html')
})

app.get('/createaccount',(req,res)=>{
    res.status(200).sendFile(__dirname.split('backend')[0] + 'createaccount.html')
})
app.get('/login',(req,res)=>{
    res.status(200).sendFile(__dirname + '/login.html')
})

app.get('/personal',(req,res)=>{
    res.status(200).sendFile(__dirname.split('backend')[0] + 'personal.html')

})
app.get('/professional',(req,res)=>{
    res.status(200).sendFile(__dirname.split('backend')[0] + 'professional.html')

})

app.get('/card',(req,res)=>{
    res.status(200).sendFile(__dirname.split('backend')[0] + 'card.html')
})

app.get('/message',(req,res)=>{
    res.status(200).sendFile(__dirname.split('backend')[0] + 'message.html')
})

app.get('/myprofile',(req,res)=>{
    res.status(200).sendFile(__dirname.split('backend')[0] + 'myprofile.html')

})
app.get('/requests',(req,res)=>{
    res.status(200).sendFile(__dirname.split('backend')[0] + 'request.html')

})
app.get('/createcard',(req,res)=>{
    res.status(200).sendFile(__dirname.split('backend')[0] + 'createcard.html')

})

app.listen(3000,()=>{
    console.log("listing to the port")
})