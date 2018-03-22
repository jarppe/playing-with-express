const Router = require("express-promise-router")
const db = require("../db")

const router = new Router()
module.exports = router

router.get("/", async (req, res) => {
  res.send(await db.many("select * from messages"))
})

router.get("/:id", async (req, res) => {
  db.one("select * from messages where id = $1", req.params.id)
    .then(r => res.send(r))
    .catch(e => res.status(404).send({error: "Not found"}))
})

router.post("/", async (req, res) => {
  const {message} = req.body
  if (message) {
    db.one("insert into messages (message) values ($1) returning id", message)
      .then(r => res.send({
        id: r.id,
        message: message
      }))
      .catch(e => {
        console.error("insert failed", e)
        res.status(500).send({error: "Oh no"})
      })
  } else {
    res.status(400).send({error: "The 'message' is required"})
  }
})
