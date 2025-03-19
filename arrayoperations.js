//7.Array Operations
console.log(" ");

let arr3 = ['a','b','c','d'];
console.log(arr3);
arr3.push('e');
console.log(arr3);
arr3.pop();
console.log(arr3);


//Reverse the array using push and pop
//a b c d -> d c b a
console.log(" ");
let arrtemp = [arr3.length];
let temp = null;
/* not worked 
for(let i=0; i<arr3.length; i++){
    for(let j=0; j<arrtemp.length; j++){
        temp = arr3[i].pop();
       arrtemp[j].push(temp);
    }
    
}

console.log(arrtemp); */