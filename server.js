const express = require("express");
//const mongoose
const mongoose = require("mongoose");
// const routes
const route = require("./routes/index.js");
//const cors
const cors = require("cors");
const bodyParser = require('body-parser');
require('dotenv').config();
// construct express function
const app = express();
app.use(cors())

const PORT = process.env.PORT

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
app.listen(PORT,()=> console.log(`Server Running at port: ${PORT}`));