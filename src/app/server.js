const app = require("./app");
const {PORT, DATABASE_URL} = require("../../config");
const knex = require("knex");

const db = knex({
    client: 'pg',
    connection: DATABASE_URL
});

app.set("db", db);

app.listen( PORT, ()=>{
    console.log(`App working. Listening on port: ${PORT}`);
});