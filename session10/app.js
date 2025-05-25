let express = require("express");
let app = express();
// let port = 6700;
let dotenv = require('dotenv');
dotenv.config();
let fs = require('fs');
let morgan = require('morgan');
let port  = process.env.Port || 6700;
let categoryRouter = require('./src/controller/categoryRouter');
let productRouter = require('./src/controller/productRouter');

//middelware
app.use(morgan('dev'));
// app.use(morgan('common'));
app.use(morgan('common',{stream:fs.createWriteStream('./app.log')}));

// static file path
app.use(express.static(__dirname+"/public"));
// html file path
app.set('views','./src/views');
//view engine
app.set('view.engine','ejs');


// //default
// app.get('/', (req, res)=>{
//     res.send('Hii From Express');
// });

// default
app.get('/',(req,res)=>{
    res.render('index.ejs');
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