const pgp = require('pg-promise')()

module.exports = pgp({
  database: "hello",
  user: "hello",
  password: "hello",
  min: 2,
  max: 5
})
