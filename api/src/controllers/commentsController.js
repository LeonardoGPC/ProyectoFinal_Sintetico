const { Comment, User, Field } = require("../db");

async function getComments() {
  const allComments = await Comment.findAll();
  if (allComments.length) return allComments;
  else throw new Error("No existen datos en la bd");
}


module.exports = {
  getComments,
};
