const express=require('express')
const router=express.Router()
const Employee=require('../models/employee')
const mongoose=require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results=await Employee.find()
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry no data found")
        }
    }
    catch(error){
        console.error(error)
        res.status(500).send("Server error")
    }
})

router.post('/employees', async (req, res) => {
  try {
    const result = await Employee.insertMany(req.body);
    res.status(201).json({ message: 'Employees inserted', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



router.get('/employeesWithDept',async(req,res)=>{
    try{
        const results=await Employee.find().populate('departmentID') 
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry no data found")
        }
    }
    catch(error){
        console.error(error)
        res.status(500).send("Server error")
    }
})

router.get('/employeesWithProjects',async(req,res)=>{
    try{
        const results=await Employee.find().populate('projects') 
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry no data found")
        }
    }
    catch(error){
        console.error(error)
        res.status(500).send("Server error")
    }
})



router.get('/emp/:did', async (req, res) => {
    
    try {
        const did = req.params.did;

        const results = await Employee.find({departmentID:did}).populate("departmentID")
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry no data found")
        }
    }
    catch(error){
        console.error(error)
        res.status(500).send("Server error")
    }
});


// Count employees per department
router.get('/countByDepartment/:did', async (req, res) => {
  try {
    const departmentId = req.params.did;

    const count = await Employee.countDocuments({ departmentID: departmentId });

    res.status(200).json({ departmentID: departmentId, employeeCount: count });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});


router.get('/departmentEmployeeCounts', async (req, res) => {
  try {
    const result = await Employee.aggregate([
      {
        $group: {
          _id: "$departmentID",
          employeeCount: { $sum: 1 }
        }
      },
      {
        $lookup: {
          from: "departments",            // name of the department collection (lowercase, plural)
          localField: "_id",              // _id is the departmentID
          foreignField: "_id",
          as: "departmentDetails"
        }
      },
      {
        $unwind: "$departmentDetails"
      },
      {
        $project: {
          _id: 0,
          departmentID: "$_id",
          employeeCount: 1,
          departmentName: "$departmentDetails.name",
         
        }
      }
    ]);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});



router.get('/procount',async(req,res)=>{
    try{
        const results=await Employee.find()
        const newResult=results.map(emp=>({
            id:emp._id,
            name:emp.name,
            number_of_project:emp.projects.length
        }))
        if(results){
            res.status(200).json(newResult)
        }else{
            res.status(404).send("Sorry no data found")
        }
    }
    catch(error){
        console.error(error)
        res.status(500).send("Server error")
    }
})


module.exports=router