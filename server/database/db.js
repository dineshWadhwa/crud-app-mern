import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

 const Connection = ()=>{

const dbUrl = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.zkibzi6.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(dbUrl, { useNewUrlParser : true}).then(conn =>{
    console.log('Database Connected Successful')
}).catch(err=>{
    console.log(err)
})



}

export default Connection ; 