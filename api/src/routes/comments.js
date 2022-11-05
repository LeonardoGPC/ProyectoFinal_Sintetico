const { Router } = require("express");
const router = Router();
const { getComments, postComment, fieldComment } = require("../controllers/commentsController");

router.get("/", async (req, res) => {
  try {
    const comments = await getComments();
    res.json(comments);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

router.get("/:id", async(req, res) => {
  try {
    const { id } = req.params
    const field = await fieldComment(id)
    res.json(field)
    // res.send("Comentario por cancha")
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
})

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
