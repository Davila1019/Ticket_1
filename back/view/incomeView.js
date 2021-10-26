const isAuthenticated = require('../middlewares/isAuthenticated')
const incomeController = require('../controller/incomeController')
const jwt = require('jsonwebtoken');
const {promisify} = require('util');
module.exports = async (app) => {
   
    app.get('/income',isAuthenticated.isAuthenticated, async(req,res) => {
        const decodificada = await promisify(jwt.verify)(req.cookies.budget, process.env.KEY)
        const token = decodificada;
        let data = await incomeController.get(token.name)
        console.log(token)
        console.log(data)
        for(i=0; i<data.length; i++){
            if(data[i].income[0] != undefined){
                console.log(data[i].income[0])
            }
            
        }
        res.render('income',{token, data})

    })

    app.post('/income',isAuthenticated.isAuthenticated, async(req,res) => {
            
            let table = req.body;
            console.log(table)
            let data= await incomeController.add(table)
            console.log(data)
            if(data){
            res.json("Fila")
            }
        })  
}