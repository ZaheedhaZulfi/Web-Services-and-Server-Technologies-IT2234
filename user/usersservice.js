const users = require('./usersdb')
const posts = require('../post/postsdb')
const comments = require('../comments/commentsdb')

function getusers() {
    return users;
}

function getuserById(id) {
    const user =  users.find((user)=>user.id==id)
    const postByUser = posts.filter((post)=>post.authorId == id)
    const noOfPosts = postByUser.length
    const commentsByUser = comments.filter((comment)=>comment.userId==id)
    const noOfComments = commentsByUser.length

    user.NumberOfPosts = noOfPosts
    user.NumberOfComments = noOfComments

    return user;

}

/*

*/ 


module.exports={getusers,getuserById}