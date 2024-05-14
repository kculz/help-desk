const express = require("express");
require("dotenv").config();
const app = express();
const {PORT} = require("./config");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
})