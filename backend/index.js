// backend/index.js
const express = require("express");
const rootRouter = require("./routes/index");
const cors = require("cors")
const bodyparser = require("body-parser")
const port = 3000;

const app = express();

app.use("/api/v1", rootRouter);
app.use(cors);
app.use(bodyparser.json());

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});