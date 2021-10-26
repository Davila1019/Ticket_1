const cashFlowController = require('../controller/cashFlowController')
const isAuthenticated = require('../middlewares/isAuthenticated')

const jwt = require('jsonwebtoken');
const {promisify} = require('util');
module.exports = async (app) => {

    app.get('/cashFlow',isAuthenticated.isAuthenticated, async(req,res) => {
        const decodificada = await promisify(jwt.verify)(req.cookies.budget, process.env.KEY)
        const token = decodificada;
        let data = await cashFlowController.get(token.name)
        console.log(token)
        console.log(data)
        for(i=0; i<data.length; i++){
            if(data[i].cashFlow[0] != undefined){
                console.log(data[i].cashFlow[0])
            }
            
        }
        res.render('cashFlow',{token, data})

    })

    app.post('/cashFlow',isAuthenticated.isAuthenticated, async(req,res) => {
        const decodificada = await promisify(jwt.verify)(req.cookies.budget, process.env.KEY)
        const token = decodificada;
            let table = req.body;
            console.log(table)
            let data= await cashFlowController.add(table)
            console.log(data)
            if(data){
                res.render('cashFlow',{token,data})
            }
        })  
}
