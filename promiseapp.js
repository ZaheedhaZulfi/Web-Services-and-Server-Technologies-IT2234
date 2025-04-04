/*Promise 
is object from a operation 
mention the status of the operation
operation return a promise 
promise as 3 states:
1-pending / waiting (waiting for input or something...)
2-fulfilled / resolved - (done)
3-rejected / error 

*/

const fs = require('fs').promises;

const readFile = (filepath)=>{
    return fs.readFile('file.txt','utf8') //return a promise
}

readFile('file.txt').then((data)=>{
    console.log(data)
})
.catch((err) =>{
    console.error(err);
})