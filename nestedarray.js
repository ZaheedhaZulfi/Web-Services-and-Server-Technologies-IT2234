//3. print the nested array
//[[1,2,30],[5,6],[8,5,3]]
let numArray = [[1,2,30],[5,6],[8,5,3]];
/*for(let j=0; j<3;j++){
    for(let k=0; k<3; k++){
        console.log(numArray[j][k] + " ");
    }
}*/

numArray.forEach((n) =>{
 console.log(n);
})

//or

numArray.forEach((n) =>{
    n.forEach((i) =>{
        console.log(i);
    })
    
})