const mongoose=require('mongoose')
const degreeSchema= new mongoose.Schema({
    _id:{type:String,required:true},
    name:{type:String,required:true},
    credits:{type:Number,required:true},
    duration:{type:Number,required:true},
    faculty:{type:String}

})

const Degree=mongoose.model('degrees',degreeSchema)
/*const BICT= new Degree({
    _id:'FAS2000ICT',
    name:'Bacholar of Information Tecnology',
    credits:3,
    duration:250,
    faculty:'Applied Science'
})
BICT.save()*/

module.exports=Degree