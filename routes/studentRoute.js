const express=require('express')
const router=express.Router()
const Student=require('../models/Student')
const { default: mongoose } = require('mongoose')

router.get('/',async (req,res)=>{
    try{
        const results = await Student.find().populate("degreeID")
        if (results) {
           return res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, No data found")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server error")
    }
})


router.get('/course', async (req, res) => {
    try {
        // Include fields required for population
        const results = await Student.find({}, { name: 1, degreeID: 1, enroled_courses: 1 })
            .populate("degreeID")
            .populate("enroled_courses");

        if (results && results.length > 0) {
            return res.status(200).json(results);
        } else {
            return res.status(404).send("Sorry, no data found!");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error!");
    }
});



module.exports=router