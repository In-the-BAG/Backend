const{ UserLikedPost } =require ( "../models")


const LikePost =async(req,res)=>{
    try {
        let likebody = {
        ...req.body,
    };
    console.log(req)
    let post = await UserLikedPost.create(likebody);
    res.send(post);
    } catch (err) {
    throw err;
    }
};
const unLikePost =async (req,res) =>{
    try{
    let postId = parseInt(req.body.postid);
    let userId = parseInt(req.body.userid);
    
    await UserLikedPost.destroy({
      where: { postid: postId, userid : userId },
    });
    /// Have some message telling us it worked
    res.send({ message: `deleted a like for ${userId} post with an id of ${postId}` });
  } catch (error) {
    throw error;
  }
}



module.exports = {

    LikePost,
    unLikePost

}