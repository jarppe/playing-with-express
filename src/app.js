const express = require("express")
const app = express()

const mountRoutes = require("./routes")

app.set("port", (process.env.PORT || 5000))
app.use(express.static("./public"))
mountRoutes(app)

app.all("/*", (req, resp, next) => {
  console.log("request:", req.method, req.path, req.query, req.params)
  next()
})

app.listen(app.get("port"), () => console.log("Node app is running at localhost:" + app.get("port")))
