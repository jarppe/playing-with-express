const Router = require("express-promise-router")
const db = require("../db")

const router = new Router()
module.exports = router

router.get("/", async (req, res) => {
  const { rows } = await db.query("select * from messages")
  res.send(rows)
})

router.get("/:id", async (req, res) => {
  const { rows } = await db.query("select * from messages where id = $1", [req.params.id])
  if (rows.length > 0) {
    res.send(rows[0])
  } else {
    res.status(404).send({error: "can't find message with id " + req.params.id})
  }
})

router.post("/", async (req, res) => {
  const { message } = req.body
  if (message) {
    db.execute("insert into messages (message) values ($1) returning id", [message], (response) => {
      res.send({
        id: response.rows[0].id,
        message: message
      })
    })
  } else {
    res.status(400).send({error: "The 'message' is required"})
  }
})
