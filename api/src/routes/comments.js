const { Router } = require("express");
const router = Router();
const { getComments } = require("../controllers/commentsController");
const { Comment, Field } = require("../db");

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
    // const { id, score, comment } = req.body;
    // const createComment = await Comments.create({ id, score, comment });
    // res.json(createComment)
    const createComment = await Comment.create(req.body);
    res.json(createComment)
    newVideogame.addGenre(genres);
    res.status(200).send(newVideogame);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});


module.exports = router;
