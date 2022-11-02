const { Router } = require("express");
const router = Router();
const { getComments } = require("../controllers/commentsController");
const { Comment, fieldComment } = require("../db");

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
    const { score, comment, FieldId } = req.body;
    const createComment = await Comment.create({ score, comment });
    await fieldComment.create({ FieldId, CommentId: createComment.id });
    res.json(createComment)
    // const createComment = await Comment.create(req.body);
    // res.json(createComment)
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});


module.exports = router;
