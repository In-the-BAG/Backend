const{ UserLikedPost } =require ( "../models")

const sendLikes = async(req,res) =>{
    try{

        let userId = parseInt(req.params.userid);
        let likes = {}
        if(!isNaN(userId)){
            likes = await UserLikedPost.findAll({
            where:{userid: userId}
        })}

        res.send(likes)
    } catch(err){
        throw err
    }
}


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
    unLikePost,
    sendLikes

}