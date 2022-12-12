const battingModel = require("../Models/battingModel")
const bowlingModel = require("../Models/bowlingModel")
const wicketModel = require("../Models/wicketModel")
const filterBowling = require("../Models/filterBowling")
const filterBatting = require("../Models/filterBatting")

const createBattings = async function (req, res) {
    try {
        let data = req.body
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
//=============================================================================

const postBowlings =  async function (req, res) {
    let data = req.body;

    const filterBow = await filterBowling.create(data)
        return res.status(201).send({
            status: true,
            message: "filterbowling created successfully",
            data: filterBow
        })
}

const getBowlings = async function (req, res){
    let body = req.query
    const getBow = await filterBowling.find(body)
    return res.status(200).send({
        status: true,
        message: 'Success',
        data: getBow
    })
}
//========================================================================


const postBattings =  async function (req, res) {
    let data = req.body;

    const filterBat = await filterBatting.create(data)
        return res.status(201).send({
            status: true,
            message: "filterbatting created successfully",
            data: filterBat
        })
}

const getBattings = async function (req, res){
    let body = req.query
    const getBat = await filterBatting.find(body)
    return res.status(200).send({
        status: true,
        message: 'Success',
        data: getBat
    })
}

module.exports = { createBattings, createBowlings, createWickets, postBowlings, getBowlings, postBattings, getBattings }