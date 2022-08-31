const dbConnect = require('./db');
var cors = require("cors")
const express = require('express')
dbConnect();
const app = express()
const port = 5000
app.use(express.json())
app.use(cors())


app.use('/api/auth', require("./routes/auth"))
app.use('/api/notes', require("./routes/notes"))
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})