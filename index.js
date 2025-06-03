const express=require('express');
const app=express();
const port=3001;
const mongoose=require('mongoose')
const employeert = require('./routes/employeeRoute')
const departmentrt = require('./routes/departmentRoute')
const projectrt = require('./routes/projectRoute')
const etfrt = require('./routes/etfRoute')

app.use(express.json())
app.use('/employee',employeert)
app.use('/department',departmentrt)
app.use('/project',projectrt)
app.use('/etf',etfrt)
mongoose.connect('mongodb://localhost:27017/companyInfoDB').then(()=>
 {
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);

})