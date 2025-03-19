//2.using foreach find the maximum number of array
let numbers = [1,2,3,4,5];

let max=null;
numbers.forEach((n) =>{
    /*if(max < n){
        max = n;
    }*/
    (max<n) && (max=n)
})
console.log("max is: " + max);
