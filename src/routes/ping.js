const Router = require("express-promise-router")
const router = new Router()

module.exports = router

router.get("/", async (req, res) => {
  res.send({ping: "pong"})
})

router.get("/foo/:bar", (req, resp) => {
  console.log("foo/" + req.params.bar)
  resp.status(202).json({foo: "Foo"})
})
