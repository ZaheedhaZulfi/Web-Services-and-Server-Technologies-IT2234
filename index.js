const express=require('express');
const app=express();
const port=8080;

const commentsRoute=require('./comments/commentsroute')
const usersRoute=require('./user/usersroute')
const postsRoute=require('./post/postsroute')

app.use(express.json())
app.use('/user',usersRoute)
app.use('/comments',commentsRoute)
app.use('/post',postsRoute)

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})