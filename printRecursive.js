//3.write recursive function to print numbers from 1 to n
function printNum(n){
    if(n == 1){
        console.log(1)
    }
    else{
	printNum(n - 1)
        console.log(n)        
    }
}
printNum(8)