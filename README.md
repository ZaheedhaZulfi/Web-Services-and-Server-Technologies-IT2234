Day_14 
2025/05/19 

1. INSERT
Method: POST
Body (raw > JSON): Postman code:

router.post('/', async (req,res)=>{
    try {
        const {code,name,credits,description} = req.body
        if (!code || !name || !credits) {
            res.status(400).send("Please provide the required fileds!")
        } else {
            const results = await Course.create({code,name,credits,description})
            res.status(200).json(results)
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }   
})

![InputCoursePost](https://github.com/user-attachments/assets/1b48c890-fecc-4a8d-add0-13d8a5ce9f11)

![InputCourseinMDB](https://github.com/user-attachments/assets/5bafe140-361b-4cb4-8ee7-ee7408efa2ef)


2.UPDATE
Method: PUT
Body (raw > JSON):Postman
code:
router.put('/:id', async (req,res)=>{
    try {
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return  res.status(400).send("Invaild ID !")
        }
        const ucourse = await Course.findById(id)
        const {code,name,credits,description} = req.body
        if (!code || !name || !credits) {
            res.status(400).send("Please provide the required fileds!")
        } else {
            const results = await ucourse.updateOne({code,name,credits,description})
            res.status(200).json(results)
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }   
})

![UpdateContentPut](https://github.com/user-attachments/assets/6a00ba0a-1d70-4930-9afb-ad6a0560c0bd)

![UpdatedContentPutMDB](https://github.com/user-attachments/assets/2f0aad3d-acbd-4db7-ace0-bcdd176302f6)

3.DELETE
Method: DELETE
Body (raw > JSON):Postman
code:

router.delete('/:id', async (req,res)=>{
    try {
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return  res.status(400).send("Invaild ID !")
        }
        const dcourse = await Course.findById(id)
        const results = await dcourse.deleteOne().catch(
            (error)=>{ return res.status(500).json(error)}
        )
        res.status(200).json(results)
        
    } catch (error) {
        console.error(error);

        res.status(500).send("Server Error !")
    }   
})

![DtidentDetailsWithDegreePstmn](https://github.com/user-attachments/assets/77b54bab-b4d7-4c83-8018-8dd1c8e3fce5)

![degreeDetails](https://github.com/user-attachments/assets/1f23f0da-3a9d-448f-8ce3-fd40a8561f0b)




