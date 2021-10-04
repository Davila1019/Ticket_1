const isAuthenticated = require('../middlewares/isAuthenticated')


module.exports = async (app) => {

    app.get('/budget',isAuthenticated.isAuthenticated, async(req,res) => {
        res.render('budgets')
        
    })
}