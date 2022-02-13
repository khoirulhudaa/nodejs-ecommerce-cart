import express from "express";
//import mongoose
import mongoose from "mongoose";
// import routes
import route from "./routes/index.js";
//import cors
import cors from "cors";
import bodyParser from 'body-parser';

// construct express function
const app = express();
app.use(cors())

app.use(express.static('images'))
app.use('/images', express.static('images'))

app.use(bodyParser.urlencoded({extended: true}))
 
// connect ke database mongoDB
mongoose.connect("mongodb+srv://huda:hudamongoose@cluster0.hwpjb.mongodb.net/Product?retryWrites=true&w=majority",{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));
 
// middleware 
app.use(cors());
app.use(express.json());

app.use('/product',route);
 
// listening to port
app.listen('4000',()=> console.log('Server Running at port: 4000'));