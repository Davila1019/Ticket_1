const isAuthenticated = require('../middlewares/isAuthenticated')
const expenseController = require('../controller/expenseController')
const jwt = require('jsonwebtoken');
const {promisify} = require('util');
module.exports = async (app) => {
   
    app.get('/expenses',isAuthenticated.isAuthenticated, async(req,res) => {
        const decodificada = await promisify(jwt.verify)(req.cookies.budget, process.env.KEY)
        const token = decodificada;
        let data = await expenseController.get(token.name)
        console.log(token)
        console.log(data)
        for(i=0; i<data.length; i++){
            if(data[i].expenses[0] != undefined){
                console.log(data[i].expenses[0])
            }
            
        }
        res.render('expenses',{token, data})

    })

    app.post('/expenses',isAuthenticated.isAuthenticated, async(req,res) => {
            
            let table = req.body;
            console.log(table)
            let data= await expenseController.add(table)
            console.log(data)
            if(data){
            res.json("Columna")
            }
        })  
}