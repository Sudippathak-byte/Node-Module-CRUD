const mongoose = require('mongoose')
const ConnectionString = "mongodb+srv://sudippathak:sudip@cluster0.flwif.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
async function connectToDatabase(){
    await  mongoose.connect(ConnectionString)
    console.log("Connected To DB Successfully")
 }

 module.exports = connectToDatabase