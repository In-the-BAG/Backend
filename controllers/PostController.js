const { Post } = require('../models')


const GetAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll()
        res.send(posts)
        console.log('POSTING IS WORKING')
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
      //dont need this line the post should increment automatically let postId = parseInt(req.params.postid);
      //userId will be sent in the body of req let userId = parseInt(req.params.userid);
      let postBody = {
        // userId is sent in the body of the request      userId,
      ...req.body,
    };
    let post = await Post.create(postBody);
    res.send(post);
  } catch (err) {
    throw err;
  }
};

const UpdatePost = async (req, res) => {
      // let postId = req.body.postid
    // let userId = req.body.userid
    // let post2update = await Post.findByPk(postId)
    console.log('trying to update post id ' + req.body.id)
    let updatedPost = await Post.update({...req.body}, {
        where: { id:req.body.id }, // where our id = our postId
        returning: true,
      });
      //Sending out our updated post
      res.send(updatedPost);
    } 

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



const GetPostByUser = async (req, res) => {
  try {
    let userId = parseInt(req.param.userid)
    const usersPost = await Post.findAll(
      req.params.userid
    )
    res.send(usersPost)
  } catch (error){
    throw error
  }
}




module.exports = {
    GetAllPosts,
    GetPostDetails,
    CreatePost,
    UpdatePost,
    DeletePost,
    GetPostByUser

}
