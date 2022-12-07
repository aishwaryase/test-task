const battingModel = require("../Models/battingModel")
const bowlingModel = require("../Models/bowlingModel")
const wicketModel = require("../Models/wicketModel")

const createBattings = async function (req, res) {
    try {

        let data = req.body

        let { matches, runs, faced, strike_rate, overs, average, level } = data  // de

        //***********check if the body is empty**************//

        if (Object.keys(data).length == 0) {
            return res.status(400).send({
                status: false,
                message: "Body should  be not Empty please enter some data to create batting"
            })
        }


        const battingCreated = await battingModel.create(data)

        return res.status(201).send({
            status: true,
            message: "Battings created successfully",
            data: battingCreated
        })
    }
    catch (error) {
        return res.status(500).send({
            status: false,
            message: error.message
        })
    }
}

// ========================================================================================

const createBowlings = async function (req, res) {
    try {

        let data = req.body

        let { matches, overs, wickets, conced, average,economy, W, wicket_matche, level } = data  // de

        //***********check if the body is empty**************//

        if (Object.keys(data).length == 0) {
            return res.status(400).send({
                status: false,
                message: "Body should  be not Empty please enter some data to create Bowlings"
            })
        }


        const bowlingCreated = await bowlingModel.create(data)

        return res.status(201).send({
            status: true,
            message: "Bowling created successfully",
            data: bowlingCreated
        })
    }
    catch (error) {
        return res.status(500).send({
            status: false,
            message: error.message
        })
    }
}
// ==============================================================================
const createWickets = async function (req, res) {
    try {

        let data = req.body

        let {  level } = data  // de

        //***********check if the body is empty**************//

        if (Object.keys(data).length == 0) {
            return res.status(400).send({
                status: false,
                message: "Body should  be not Empty please enter some data to create Wickets"
            })
        }


        const wicketCreated = await wicketModel.create(data)

        return res.status(201).send({
            status: true,
            message: "Wicket created successfully",
            data: wicketCreated
        })
    }
    catch (error) {
        return res.status(500).send({
            status: false,
            message: error.message
        })
    }
}

module.exports = { createBattings, createBowlings, createWickets }