const mongoose=require('mongoose');
const colors=require('colors');

const connectDB = async()=>{
    try{
      await mongoose.connect("mongodb+srv://kavinraje2022cse:admin123@cluster0.ssphf4t.mongodb.net/bloodlifecity?retryWrites=true&w=majority&appName=Cluster0")
      console.log(`Connected to MongoDB database ${mongoose.connection.host}`.bgMagenta.white);
    }
    catch(error){
      console.log(`MongoDB database Error ${error}`.bgRed.white);
    }
}

module.exports=connectDB