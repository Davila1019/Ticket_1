const isAuthenticated = require('../middlewares/isAuthenticated')
const resultsController = require('../controller/resultsController')
const jwt = require('jsonwebtoken');
const {promisify} = require('util');
module.exports = async (app) => {

    app.get('/results',isAuthenticated.isAuthenticated, async(req,res) => {
        const decodificada = await promisify(jwt.verify)(req.cookies.budget, process.env.KEY)
        const token = decodificada;
        let data = await resultsController.get(token.name)
        console.log(token)
        console.log(data)
        for(i=0; i<data.length; i++){
            if(data[i].results[0] != undefined){
                console.log(data[i].results[0])
            }
            
        }
        res.render('results',{token, data})

    })


}