import express from "express";
import cors from 'cors'
import morgan from "morgan";
import dotenv from 'dotenv';
dotenv.config()
import connectDB from "./conn.js";
import route from "./routers/routes.js";


const app = express()

// middleware

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.disable('x-powered-y')

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.status(201).json("You are home")
})


app.use('/', route)



connectDB().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log("Invalid database connection...!");
})


