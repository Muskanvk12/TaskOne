const express = require("express")
const newPlate = express.Router()
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3001)

app.use('/newnameplate', newPlate)

newPlate
    .route('/newplate')
    .get(sendData)
    .post(getData)

let userPlateData = []
function sendData(req, res){
    res.json({
        message : "Hello"
    })
}
function getData(req, res){
    let obj = req.body;
    
    console.log(obj)
    res.json({
        message: "hello",
        userData: obj
    })
}



