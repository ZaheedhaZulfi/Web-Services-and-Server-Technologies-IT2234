const comments = require('./commentsdb')

function getcomments() {
    return comments;
}

function getcomment(id) {
    return comments.find((comments)=>comments.id==id)
}



module.exports={getcomment,getcomments}