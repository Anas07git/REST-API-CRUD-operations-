const express=require('express')
const mongoose=require('mongoose');

const url='mongodb://localhost/SampleDB'
const app=express();



mongoose.connect(url,{useNewUrlParser:true})
const con =mongoose.connection

con.on('open',function(){
    console.log('Connected')
})

app.use(express.json())

const appRoute=require('./routes/peoples')
app.use('/peoples',appRoute)


app.listen(9001,function(){
    console.log('Server Started')
})
