/*Syn 

1
2
3

async

event driven and non I/O blocking programme 

1-read a File
2-request data from an api from Internet 
3-print a message

*/


const fs = require('fs');
fs.readFile('file.txt','utf8',(err,data)=>{
    if(err){
        console.error(err);
        return 0;
    }
    console.log(data);
});

console.log("File reading is done..")

