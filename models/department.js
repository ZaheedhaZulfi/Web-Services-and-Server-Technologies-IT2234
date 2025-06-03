const mongoose=require('mongoose')
const departmentSchema= new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true, unique:true},
    head:{type:mongoose.Schema.Types.String, ref:'employees'},
    employees: [{type:mongoose.Schema.Types.String, ref: 'employees'}]
})
const Department=mongoose.model('Department',departmentSchema) // to models name




module.exports=Department