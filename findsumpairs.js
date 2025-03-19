//5. arr = [1,2,3,4,5,6]
//target = 7
//write a code fint the all pairs thar sum up to the target
let arr = [1,2,3,4,5,6];
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if(arr[i] + arr[j] == 7){
            console.log(arr[i] + " + "+ arr[j] + " = 7");
        }
    }
}

//or
console.log(" ");

arr.forEach((n) =>{
    arr.forEach((m) =>{
        if(n + m == 7){
            console.log(n + " + " + m + " =7");
        } 
    })
})