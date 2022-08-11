require("dotenv").config();
const Pool = require('pg').Pool

//Create .env file and get data from it
const pool = new Pool({
    user: process.env.NAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE
})

class DataBase {

    async createUser(email, name, surname, age) {
        try {
            await pool.query(`
                INSERT INTO users(name, surname, email, age)
                VALUES ($1, $2, $3, $4)`, [name, surname, email, age])
            return 201
        } catch (err) {
            return err
        }
    }

    async getUsers(input) {
        try {
            const users = await pool.query(`SELECT concat(name, ' ', surname) AS fullname
                                            FROM users
                                            WHERE email LIKE ($1)`, [input])
            return users.rows.map(({fullname})=>fullname);
        } catch (err) {
            return err
        }
    }
}


module.exports = new DataBase()
