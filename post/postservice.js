const posts = require('./postsdb')
const users = require('../user/usersdb')
const comments = require('../comments/commentsdb')

/*function getposts() {
    return posts;
}*/

function getpostById(id) {

    const result = []
    comments.forEach(comment=>{
        if(comment.postId==id){
            const userInComment = users.find(user=>user.id===comment.userId)
            result.push({
                comment:comment.content,
                commentator:userInComment.username
            })
        }
    })
    return result
}



module.exports={getpostById}