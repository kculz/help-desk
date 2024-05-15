const express = require("express");
require("dotenv").config();
const cors = require("cors");
const db = require("./models/index");
const app = express();
const {PORT, CLIENT_ORIGIN} = require("./config");
const { AuthRoute } = require("./routes/Auth");


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use(cors({
    origin: CLIENT_ORIGIN,
    credentials: true,
    methods: ["POST", "GET", "PATCH", "DELETE", "PUT"]
}));

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