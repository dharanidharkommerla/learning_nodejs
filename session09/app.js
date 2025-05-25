let express = require("express");
let app = express();
// let port = 6700;
let dotenv = require('dotenv');
dotenv.config();
let port  = process.env.Port || 6700;
let categoryRouter = require('./src/controller/categoryRouter');
let productRouter = require('./src/controller/productRouter')
//default
app.get('/', (req, res)=>{
    res.send('Hii From Express');
});


app.use('/category',categoryRouter);
app.use('/product', productRouter);

app.listen(port,(err)=>{
    if(err) throw err;
    else{
    console.log(`server is running on port ${port}`);
    }
});

// cmd > node app