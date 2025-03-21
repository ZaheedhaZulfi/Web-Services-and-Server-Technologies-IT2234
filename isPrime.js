//2.write a boolean function to find a given number is prime

function findPrime(a){
    for(let i=2; i<a; i++){
        if(a%i == 0){
            return false
        }
    }
    return true
}
console.log(findPrime(8))
