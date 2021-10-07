const isAuthenticated = require('../middlewares/isAuthenticated')

module.exports = async (app) => {

    app.get('/income', async(req,res) => {
        res.render('income')
        
    })
}