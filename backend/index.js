const express = require('express');
const cors = require('cors');
const entityRoute = require('./routes/entityRoutes');

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/entities", entityRoute);
// app.use("/entity",)

app.listen(6600, () => {
    console.log("Server has started at PORT:6600");
})