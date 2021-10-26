const isAuthenticated = require('../middlewares/isAuthenticated')
const directCostController = require('../controller/directCostController')
const jwt = require('jsonwebtoken');
const {promisify} = require('util');
module.exports = async (app) => {
   
    app.get('/directCosts',isAuthenticated.isAuthenticated, async(req,res) => {
        const decodificada = await promisify(jwt.verify)(req.cookies.budget, process.env.KEY)
        const token = decodificada;
        let data = await directCostController.get(token.name)
        console.log(token)
        console.log(data)
        for(i=0; i<data.length; i++){
            if(data[i].directCosts[0] != undefined){
                console.log(data[i].direcCost[0])
            }
            
        }
        res.render('directCosts',{token, data})

    })

    app.post('/directCosts',isAuthenticated.isAuthenticated, async(req,res) => {
            
            let table = req.body;
            console.log(table)
            let data= await directCostController.add(table)
            console.log(data)
            if(data){
            res.json("Columna")
            }
        })  
}