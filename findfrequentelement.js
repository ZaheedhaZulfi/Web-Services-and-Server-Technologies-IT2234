//6.[4,8,3,4,3,2,1,8,4]
//find the most frequent elemant in the array

let arr2 = [4, 8, 3, 4, 3, 2, 1, 8, 4];
let maxCount = 0;
let mostFrequentElement = null;

for (let i = 0; i < arr2.length; i++) {
    let count = 0;
    for (let j = 0; j < arr2.length; j++) {
        if (arr2[i] === arr2[j]) {
            count++;
        }
    }
    if (count > maxCount) {
        maxCount = count;
        mostFrequentElement = arr2[i];
    }
}

console.log("Most frequent element:", mostFrequentElement);
