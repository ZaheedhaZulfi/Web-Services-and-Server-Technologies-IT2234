const express=require('express')
const router=express.Router()
const postService=require('./postservice')

router.get('/',(req,res)=>{
    const results = postService.getposts()
    if (results) {
        //res.json(studentSevise.getstudents()) //res.json bcz geta json output
        res.status(200).json(results)
    } else {
        res.status(404).send("Sorry, No data found!")
    }
    
})

router.get('/:id',(req,res)=>{
    const id = req.params.id
    const results = postService.getpostById(id)
    if (results) {
        //res.json(studentSevise.getstudents()) //res.json bcz geta json output
        res.status(200).json(results)
    } else {
        res.status(404).send("Sorry, No data found!")
    }
    
})




module.exports=router