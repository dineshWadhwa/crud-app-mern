import express from "express";
import Connection from "./database/db.js";
import Routes from "./routes/Routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 8000; 

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());
app.use('/',Routes);



Connection();

app.listen(PORT,()=>{console.log(`server runs on port no ${PORT}`)})