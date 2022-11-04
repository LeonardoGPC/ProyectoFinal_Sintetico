const { Router } = require("express");
const router = Router();
const { getComments, postComment } = require("../controllers/commentsController");
const { Comment, Booking } = require("../db");

router.get("/", async (req, res) => {
  try {
    const comments = await getComments();
    res.json(comments);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { score, comment, UserId,FieldId, hour, date } = req.body;
    const createComment = await Comment.create({ score, comment });
    await Booking.create({ UserId, CommentId: createComment.id, FieldId, hour, date });
    res.json(createComment)
    // res.send(comentario)
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});


module.exports = router;
