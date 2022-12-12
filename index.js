const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const router = require("./routes/route")
const port = process.env.PORT || 3000
const app = express();

app.use(bodyParser.json())

mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://Aishwarya123:sg8eJZVpV9e3eEP3@cluster0.gf2pu4l.mongodb.net/Applications", {

})
    .then(() => console.log("MongoDB is connected successfully.."))
    .catch((Err) => console.log(Err))

app.use("/", router)

app.listen(port, function () {
    console.log(`Server is connected on Port ${port} ✅✅✅`)
})