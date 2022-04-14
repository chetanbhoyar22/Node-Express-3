const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/index.js")

const app = express();
app.use(cors());

app.use("/api/v1",mainRouter);

// app.listen(3001, () => {  //Simple localhost
app.listen(process.env.PORT || 3001, () => { //Heroku
    console.log("Application is started...")
})

//CI & CICD - continuous integration and continuous delivery/continuous deployment