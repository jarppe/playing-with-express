const {Pool} = require("pg")

const pool = new Pool({
  user: "hello",
  database: "hello",
  password: "hello"
})

const shouldAbort = (err, done, reject) => {
  if (err) {
    console.error("Error in transaction", err.stack)
    client.query("ROLLBACK", (err) => {
      if (err) {
        console.error("Error rolling back client", err.stack)
      }
      done()
      reject(new Error("fail"))
    })
  }
  return !!err
}

module.exports = {
  query: (sql, params) => pool.query(sql, params),
  execute: (sql, params, result) => {
    pool.connect((err, client, done) => {
      shouldAbort(err, done)
      client.query("BEGIN", (err) => {
        if (shouldAbort(err, done)) return
        client.query(sql, params, (err, res) => {
          if (shouldAbort(err, done)) return
          client.query("COMMIT", (err) => {
            if (err) console.error("Error committing transaction", err.stack)
            done()
            if (result) result(res)
          })
        })
      })
    })
  }
}
