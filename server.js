import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';


//configure env
dotenv.config();
//rest object
const app = express();


//esmodule fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'./client/build')));



//rest api
app.use('*',function(req,res) {
   res.sendFile(path.join(__dirname,'./client/build/index.html'));
})

const PORT = process.env.PORT || 8080;
app.listen(PORT,() => {
   console.log(`server is Running on ${PORT}`.bgCyan.white)
});
