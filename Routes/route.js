const express = require("express")
const battingController = require("../Controllers/batting")

const Router = express.Router()

Router.post("/batting", battingController.createBattings)
Router.post("/bowling", battingController.createBowlings)
Router.post("/wicket", battingController.createWickets)


//************ checking your end point valid or not */
Router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        message: "Make Sure Your Endpoint is Correct or Not!"
    })
})

module.exports = Router


