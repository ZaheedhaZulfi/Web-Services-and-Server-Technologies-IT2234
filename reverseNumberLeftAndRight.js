//reverse the numbers in left and right 4321-5-9876
console.log("reverse the numbers in left and right 4321-5-9876")
let number  =15;

let middle = parseInt(number/2)+1;

for(let i=middle-1; i>0; i--){
    console.log(i);
}

console.log("-" + middle + "-");

for(let i=number; i>middle; i--){
    console.log(i);
}