
const registerController = require('../controller/registerController')



module.exports = async (app) => {
    app.post('/register',async(req,res) => {
        let user = req.body;
        await registerController.add(user)
        res.json("Usuario creado")
    })
}