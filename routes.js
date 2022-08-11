const express = require("express");
const db = require("./db")
require("dotenv").config(); // Give us the access to add new variable in env system

const app = express();


// Set for rendering html templates
app.set('view engine', 'html');
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/age-validator', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
})
app.post('/age-validator', (req, res) => {
    const query = req.body
    if (query.age >= 18) {
        res.status(200).send(`Hello ${query.name} ${query.surname}`)
    } else {
        res.status(403).send('You are not allowed to get access to this url')
    }
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html')
})

app.post('/register', async (req, res) => {
    const query = req.body
    if (query.age >= 18) {
        let result = await db.createUser(
            query.email,
            query.name,
            query.surname,
            query.age,
        )
        if (result === 201) {
            res.status(result).send('Done')
        } else {
            res.send(`Error: ${result.message}`)
        }
    } else {
        res.status(403).send('You are not allowed to get access to this url')
    }
})

app.get('/search', async (req, res) => {
    const email = req.query.email
    let result =  await db.getUsers(email)
    res.send(result)
})


//Create .env file and get data from it
app.listen(process.env.HTTPPORT || '8000')
console.log(`Link ---> http://localhost:${process.env.HTTPPORT}`) // for dev