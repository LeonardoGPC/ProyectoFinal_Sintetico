const { Booking, User, Comment } = require("../db");

async function getComments() {
  const allComments = await Comment.findAll({
    include: {
      model: Booking,
      attributes: ["date", "hour", "UserId"],
    },
  });
  if (allComments.length) return allComments;
  else throw new Error("No existen datos en la bd");
}

module.exports = {
  getComments,
};
