//4.arrow function
/*
function PrintMsg(){
    console.log("Hello js")
}
*/

const msg = ()=>{return ("Hello JS")}
//console.log(msg)
console.log(msg())

//write an arrow function to sum 2 numbers
const add = (a,b)=>{return (a+b)}
console.log(add(4,5))

//default parameter
const mul = (a, b=2) =>{return (a*b)}
console.log(mul(4,5))
console.log(mul(4))

let sum1 = 0
const mysum = (...n)=>{
    console.log(n)
    for(let i=0; i<n.length; i++){
        sum1 += n[i]
    }
    console.log(sum1)
}

mysum(4,5,6,89,2)

//using forEach
/*const mysum = (...n)=>{
   let t=0
   n.forEach((i) =>t=t+i)
   console.log(t)
} */

//using reduce
/*
const mysum = (...n)=>{
    return n.reduce((t,i)=>t=t+i)
    }
*/