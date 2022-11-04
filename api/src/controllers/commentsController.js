const { Booking, User, Comment } = require("../db");

async function getComments() {
  const allComments = await Comment.findAll();
  if (allComments.length) return allComments;
  else throw new Error("No existen datos en la bd");
}

async function postComment(score, comment, UserId, CommentId) {
  try {
    // const targetComment = await Comment.findAll();
    // const targetUser = await User.findByPk(UserId);

    // targetUser.addComment(targetComment, { through: { comment, score } });

    
    


  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getComments,
  postComment,
};
