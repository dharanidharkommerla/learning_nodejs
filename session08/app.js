let express = require("express");
let app = express();
// let port = 6700;
let dotenv = require('dotenv');
dotenv.config();
let port  = process.env.Port || 6700;


//default
app.get('/', (req, res)=>{
    res.send('Hii From Express');
});

app.get('/test',(req,res)=>{
    res.send('Hii From Test route');
});

app.listen(port,(err)=>{
    if(err) throw err;
    else{
    console.log(`server is running on port ${port}`);
    }
});