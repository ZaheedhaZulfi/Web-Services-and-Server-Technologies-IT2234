const mongoose=require('mongoose')
const employeeSchema= new mongoose.Schema({
    _id:{type:Number,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    salary:{type:Number,required:true,min:0},
    departmentID:{type:mongoose.Schema.Types.String,ref:'departments'}, //
    projects:[{type:mongoose.Schema.Types.String,ref:'projects'}]

})
const Employee=mongoose.model('Employee',employeeSchema) // to models name

/* const EmployeeDetails=new Employee({
    _id:1,
    name:'Ram',
    email:'Ram123@gmail.com',
    salary:50000,
})

EmployeeDetails.save() */



module.exports=Employee