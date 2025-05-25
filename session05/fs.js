// let fs = require('fs')

// fs.writeFile('myfile.txt','this is the contnet present in the file',(err)=>{
//     if(err) throw err;
//     console.log('Task Done');
// });

// // overrides the existing text
// fs.writeFile('myfile.txt','this is the second contnet present in the file',(err)=>{
//     if(err) throw err;
//     console.log('Task Done');
// });

// let fs = require('fs')

// fs.writeFile('myfile.txt','this is the contnet present in the file',(err)=>{
//     if(err) throw err;
//     console.log('Task Done');
// });

// // overrides the existing text
// fs.writeFile('myfile.txt','this is the second contnet present in the file',(err)=>{
//     if(err) throw err;
//     console.log('Task Done');
// });

fs.appendFile('myfile.txt',"\nThis the Third content",(err)=>{
    if(err) throw err;
    console.log('Appending of the content is Done.');
});

// file system is mainly used in logs 

fs.readFile('myfile.txt',)