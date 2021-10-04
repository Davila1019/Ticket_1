const isAuthenticated = require('../middlewares/isAuthenticated')

module.exports = async (app) => {

    app.get('/nuevoPresupuesto', async(req,res) => {
        res.render('tablas')
        
    })
}