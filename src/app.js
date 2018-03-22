const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const serveStatic = require("serve-static")
const app = express()
const mountRoutes = require("./routes")

app.set("port", (process.env.PORT || 5000))
app.use(morgan("tiny"))
app.use(serveStatic("./public"))
app.use(bodyParser.json())

mountRoutes(app)

app.listen(app.get("port"), () => console.log("Node app is running at localhost:" + app.get("port")))
