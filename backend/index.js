const express = require('express')
const dotenv = require('dotenv').config();
const cors = require('cors')
const routes = require('./routes/authRoutes')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const app = express();

//database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Connected to Database"))
.catch((err) => console.log("Database not connected", err))

//middleware
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

const port = 8000;

app.use('/', routes)

app.listen(port, () => console.log(`Server is running on port ${port}`));
