const { Pool } = require("pg")

const pool = new Pool({
  user: "hello",
  database: "hello",
  password: "hello"
})

module.exports = {
  query: (sql, params) => pool.query(sql, params)
}
