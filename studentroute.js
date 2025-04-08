const express=require('express')
const router=express.Router()
const studentService=require('./studentservice')

router.get('/',(req,res)=>{
    const results = studentService.getstudents()
    if (results) {
        //res.json(studentSevise.getstudents()) //res.json bcz geta json output
        res.status(200).json(results)
    } else {
        res.status(404).send("Sorry, No data found!")
    }
    
})

router.get('/:id',(req,res)=>{
    const id = req.params.id
    const results = studentService.getstudent(id)
    if (results) {
        //res.json(studentSevise.getstudents()) //res.json bcz geta json output
        res.status(200).json(results)
    } else {
        res.status(404).send("Sorry, No data found!")
    }
    
})

router.get('/gender/:gen',(req,res)=>{
    const gender = req.params.gen=='m'?'male':'female'
    const results = studentService.getByGender(gender)
    if (results) {
        //res.json(studentSevise.getstudents()) //res.json bcz geta json output
        res.status(200).json(results)
    } else {
        res.status(404).send("Sorry, No data found!")
    }
    
})


module.exports=router