let express = require('express');
let categoryRouter = express.Router();

const category = [
    {
        "id":1,
        "category": "Fashion",
        "thumb":"https://i.ibb.co/56VP0Fn/cloths.jpg"
    },
    {
        "id":2,
        "category":"Electronics",
        "thumb":"https://i.ibb.co/pw5Wtdx/appliances.jpg"
    },
    {
        "id":3,
        "category":"Essentials",
        "thumb":"https://i.ibb.co/0cw34xm/essentials.jpg"
    },
    {
        "id":4,
        "category": "Footwear",
        "thumb":"https://i.ibb.co/r3SZq8S/footware.jpg"
    }
];

// let menu=[
//     {name:'Category', link:'/category'},
//     {name:'Product', link:'/product'},
// ];

// categoryRouter.route('/')
//     .get((req,res)=>{
//         // res.send(category);
//         // res.send(nameOfTheFile,);
//         // res.render('category',{title:'category page', data:category});
//         // res.render('category',{title:'category page', category:category});
//         res.render('category',{title:'category page', category,menu});
//     });

// categoryRouter.route('/details')
//     .get((req,res)=>{
//         res.send('category details');
//     });

// module.exports = categoryRouter;
// exportin the object not the entire module

function router(menu){
    categoryRouter.route('/')
    .get((req,res)=>{
        res.render('category',{title:'category page', category,menu});
    });

    categoryRouter.route('/details')
    .get((req,res)=>{
        res.send('category details');
    });

    return categoryRouter;
}

module.exports = router;


