const loginController = require('../controller/loginController')

module.exports = async (app) => {
    app.post('/login',async(req,res) => {
        let user = req.body;
        res.send( await loginController.login(user));
    });
};


module.exports = async (app) => {
    app.get('/login', async(req,res) => {
        res.render('login')
    })
}