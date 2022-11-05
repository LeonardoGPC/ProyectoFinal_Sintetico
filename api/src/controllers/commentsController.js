const { Comment, User, Field } = require("../db");

async function getComments() {
  const allComments = await Comment.findAll();
  if (allComments.length) return allComments;
  else throw new Error("No existen datos en la bd");
}

async function postComment({ comment, score, FieldId, UserId }) {
  try {
    const post = await Comment.create({
      comment: comment,
      score: score,
      UserId: UserId,
      FieldId: FieldId,
    });
    return post
  } catch (error) {
    console.log("Error en el controlador postComment: " + error);
  }
}

module.exports = {
  getComments,
  postComment,
};
