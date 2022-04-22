const { Comment } = require('../models')

const GetAllComments = async (req, res) => {
  try {
      const comments = await Comment.findAll()
      res.send(comments)
      console.log('Comments are working')
  } catch (err) {
      throw err
  }
}



const GetCommentDetails = async (req, res) => {
    try {
        const details = await Comment.findByPk(
            req.params.commentid
            );
        res.send(details)
    } catch (err) {
        throw err
    }
}

const CreateComment = async (req, res) => {
  try {
    // Find the comment by owner
    let postId = parseInt(req.params.postid);
    let userId = parseInt(req.params.userid);
    let commentBody = {
      postId,
      userId,
      ...req.body,
    };
    let comment = await Comment.create(commentBody);
    res.send(comment);
  } catch (err) {
    throw err;
  }
};

const UpdateComment = async (req, res) => {
  
    try {
    let commentId = parseInt(req.params.commentid);
    let updatedComment = await Comment.update(req.body, {
        where: { id: commentId }, // where our id = out twertId
        returning: true,
      });
      //Sending out our updated twert
      res.send(updatedComment);
    } catch (error) {
      throw error;
    }
  };

  const DeleteComment = async (req, res) => {
    try {
      
      let commentId = parseInt(req.params.id);
   
      await Comment.destroy({
        where: { id: commentId },
      });
      /// Have some message telling us it worked
      res.send({ message: `deleted a comment with an id of ${commentId}` });
    } catch (error) {
      throw error;
    }
  };

  const GetPostComments = async (req, res) => {
    try {
      let postId = req.params.postId
      console.log(postId)
      const usersComments = await Comment.findAll(
        {where: {postid: postId}}
  
      )
      res.send(usersComments)
    } catch (error){
      throw error
    }
  }
  


module.exports = {
    GetAllComments,
    GetCommentDetails,
    CreateComment,
    UpdateComment,
    DeleteComment,
    GetPostComments
}