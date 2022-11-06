const { Comment, User, Field } = require("../db");

async function getComments() {
  const allComments = await Comment.findAll({
    include: {
      model: User,
      attributes: ["name", "userName", "image"],
    },
  });
  if (allComments.length) return allComments;
  else throw new Error("No existen datos en la bd");
}

async function fieldComment(id){
  const field = await Comment.findAll({
    where: {
      FieldId: id,
    },
    include: {
      model: User,
      attributes: ["name", "userName", "image"],
    },
  })
  let mapeo = field.map((el) => el.score);
  let promedio = mapeo.reduce((a, b) => {
    return a + b / mapeo.length;
  }, 0);
  let redondeo = Math.round(promedio);
  console.log(redondeo);
  await Field.update(
    {
      score: redondeo,
    },
    {
      where: {
        id: id,
      },
    }
  );
  return field;
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
  fieldComment,
};
