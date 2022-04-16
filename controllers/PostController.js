const { Post } = require('../models')


const GetAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll()
        res.send(posts)
    } catch (err) {
        throw err
    }
}



const GetPostDetails = async (req, res) => {
    try {
        const details = await Post.findByPk(
            req.params.postid
            );
        res.send(details)
    } catch (err) {
        throw err
    }

}

const CreatePost = async (req, res) => {
  try {
    // Find the Post by owner
    let postId = parseInt(req.params.postid);
    let userId = parseInt(req.params.userid);
    let postBody = {
      postId,
      userId,
      ...req.body,
    };
    let post = await Post.create(postBody);
    res.body(post);
  } catch (err) {
    throw err;
  }
};

const UpdatePost = async (req, res) => {
  
    try {
    let postId = parseInt(req.params.postid);
    let updatedPost = await Post.update(req.body, {
        where: { id: postId }, // where our id = our postId
        returning: true,
      });
      //Sending out our updated post
      res.send(updatedPost);
    } catch (error) {
      throw error;
    }
  };

  const DeletePost = async (req, res) => {
    try {
      
      let postId = parseInt(req.params.postid);
   
      await Post.destroy({
        where: { id: postId },
      });
      /// Have some message telling us it worked
      res.send({ message: `deleted a post with an id of ${postId}` });
    } catch (error) {
      throw error;
    }
  };


module.exports = {
    GetAllPosts,
    GetPostDetails,
    CreatePost,
    UpdatePost,
    DeletePost
}
