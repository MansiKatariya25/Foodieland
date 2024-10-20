const mongoose = require('mongoose');

const connectDb = ()=> {
    try {
        const mongo = mongoose.connect("mongodb+srv://katariyamansi25:n2nKRAO779gtWHaj@cluster0.zzqox.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        if(mongo){
            console.log("Connected");
        }
        else{
            console.log("Not connected");
        }
    } catch(error) {
        console.log(error);
        
    }
    
}

module.exports = connectDb