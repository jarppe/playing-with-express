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
  res.send(rows[0])
})
