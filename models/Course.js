const mongoose=require('mongoose')
const courseSchema= new mongoose.Schema({
    code:{type:String},
    name:{type:String},
    credits:{type:Number},
    description:{type:String}
})

const Course=mongoose.model('courses',courseSchema)
const webservice= new Course({
    code:'IT2234',
    name:'Practical for WebService',
    credits:3,
    description:'Build a REST API with Node.js technology'
})
//webservice.save()

const database= new Course({
    code:'IT1223',
    name:'Database Management Systems',
    credits:4,
    description:'Covers relational database and SQL operations'
})
//database.save()

module.exports=Course