const messages = require("./messages")
const ping = require("./ping")

module.exports = (app) => {
  app.use("/", ping)
  app.use("/messages", messages)
}
