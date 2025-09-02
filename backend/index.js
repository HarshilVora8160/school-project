const express = require('express');
const ConnectDb = require('./db');
const router = require('./routes/SchoolRouter');
require('dotenv').config();
const cors = require('cors')

const PORT = process.env.PORT || 4001


const app = express();
app.use(express.json())
app.use(cors())

const serverStart = async () => {
    try {
        await ConnectDb()
        app.get('/', (req, res, next) => {
            res.json({message:"NodeJs"})
        })

        app.listen(PORT, () => {
            console.log(`server Start on port ${PORT}`);
        })

        app.use('/api', router)
    } catch (error) {
        console.log(error)
    }
}

serverStart();