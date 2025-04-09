const express=require('express')
const router=express.Router()
const commentsService=require('./commentservice')

router.get('/',(req,res)=>{
    const results = commentsService.getcomments()
    if (results) {
        //res.json(studentSevise.getstudents()) //res.json bcz geta json output
        res.status(200).json(results)
    } else {
        res.status(404).send("Sorry, No data found!")
    }
    
})

router.get('/:id',(req,res)=>{
    const id = req.params.id
    const results = commentsService.getcomment(id)
    if (results) {
        //res.json(studentSevise.getstudents()) //res.json bcz geta json output
        res.status(200).json(results)
    } else {
        res.status(404).send("Sorry, No data found!")
    }
    
})




module.exports=router