const isAuthenticated = require('../middlewares/isAuthenticated')
const budgetController = require('../controller/budgetController')
const jwt = require('jsonwebtoken');
const {promisify} = require('util');
module.exports = async (app) => {
   
    app.get('/budget', async(req,res) => {
        const decodificada = await promisify(jwt.verify)(req.cookies.budget, process.env.KEY)
        const token = decodificada;
        res.render('budgets',{token})
    })

    app.post('/budget',async(req,res) => {

        let budget = req.body;
        
        const cookieOptions = {
            expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 1000),
            httpOnly: true
        }
        let data = await budgetController.add(budget)
        if(data){
            console.log(data)
            res.cookie('budget', data, cookieOptions)
            const decodificada = await promisify(jwt.verify)(req.cookies.budget, process.env.KEY)
            const token = decodificada;
            res.render('budgets',{token})
        
        }
        
    })
}