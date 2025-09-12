const express = require('express');
const ConnectDb = require('./db');
const router = require('./routes/SchoolRouter');
const multer = require("multer")
const upload = multer({ dest: "uploads/" });

require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || 4001

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

const serverStart = async () => {
    try {
        await ConnectDb()
        app.get('/', (req, res, next) => {
            res.render({ message: "NodeJs" })
        })

        app.listen(PORT, () => {
            console.log(`server Start on port ${PORT}`);
        })

        app.use('/api', router)

        app.post("/upload", upload.single("profileImage"), (req, res, next) => {
            console.log("req.body-----------------", req.body);
            console.log("req.file-----------------", req.file);
            return res.redirect('/');
        })
    } catch (error) {
        console.log(error)
    }
}

serverStart();