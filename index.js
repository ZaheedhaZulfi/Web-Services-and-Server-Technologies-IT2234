const express=require('express');
const app=express();
const port=3001;

const studentRoute=require('./student/studentroute')
const courseRoute=require('./course/courseroute')

app.use(express.json())
app.use('/student',studentRoute)
app.use('/course',courseRoute)

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})