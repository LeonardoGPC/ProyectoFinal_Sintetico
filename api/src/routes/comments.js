const { Router } = require("express");
const router = Router();
const { getComments, postComment } = require("../controllers/commentsController");
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
    const data = req.body
    await postComment(data)
    res.json("Comentario enviado")
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});


module.exports = router;
