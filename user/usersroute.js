const express=require('express')
const router=express.Router()
const usersService=require('./usersservice')

router.get('/',(req,res)=>{
    const results = usersService.getusers()
    if (results) {
        //res.json(studentSevise.getstudents()) //res.json bcz geta json output
        res.status(200).json(results)
    } else {
        res.status(404).send("Sorry, No data found!")
    }
    
})

router.get('/summary/:id',(req,res)=>{
    const id = req.params.id
    const results = usersService.getuserById(id)
    if (results) {
        //res.json(studentSevise.getstudents()) //res.json bcz geta json output
        res.status(200).json(results)
    } else {
        res.status(404).send("Sorry, No data found!")
    }
    
})




module.exports=router