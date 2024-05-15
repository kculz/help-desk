const express = require("express");
require("dotenv").config();
const db = require("./models/index");
const app = express();
const {PORT} = require("./config");
const { AuthRoute } = require("./routes/Auth");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.use('/api', AuthRoute);

db.sequelize.sync().then((req) => {
    app.listen(PORT, () => {
        console.log(`Server running on port http://localhost:${PORT}`);
    });
});