//8.Define 10 student JSON
//Store it in an array




let students = [
    { name: "Alice", gender: "Female", course: "IT", gpa: 3.8 },
    { name: "Bob", gender: "Male", course: "Engineering", gpa: 3.2 },
    { name: "Charlie", gender: "Male", course: "IT", gpa: 3.6 },
    { name: "Diana", gender: "Female", course: "Business", gpa: 3.9 },
    { name: "Eve", gender: "Female", course: "IT", gpa: 3.5 },
    { name: "Frank", gender: "Male", course: "Mathematics", gpa: 3.1 },
    { name: "Grace", gender: "Female", course: "IT", gpa: 3.7 },
    { name: "Henry", gender: "Male", course: "IT", gpa: 3.3 },
    { name: "Ivy", gender: "Female", course: "Engineering", gpa: 3.4 },
    { name: "Jack", gender: "Male", course: "Business", gpa: 3.0 }
];

//find the female students
students.forEach((n) =>{
    if(n.gender === "Female"){
        console.log(n);
    }
})

console.log(" ");

//find the students who are following IT course
students.forEach((n) =>{
    if(n.course === "IT"){
        console.log(n);
    }
})

console.log(" ");

//find the max GPA among the sutents
let max = 0;

students.forEach((n) =>{
    if(n.gpa  > max){
        max = n.gpa;
    }
})
console.log("Maximum GPA is: " + max);

console.log(" ");

//find the average GPA of the sutents

let totalAverage = 0;
let count = 0;

students.forEach((n) =>{
    totalAverage += n.gpa
    count++;
})

console.log("Average gpa is: " + (totalAverage/count));