# node-js-sample

A barebones Node.js app using [Express](http://expressjs.com/) and
[pg](https://node-postgres.com/).

## Running Locally

Start PostgreSQL

```sh
( cd devops; docker-compose up -d )
```

Start app:

```sh
npm install
npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).
