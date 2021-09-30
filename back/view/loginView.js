const loginController = require('../controller/loginController')

module.exports = async (app) => {

    app.get('/login', async(req,res) => {
        res.render('login',{
            alert: false,
            alertTitle: "Advertencia",
            alertMessage: "Ingrese un usuario y contraseña",
            alertIcon: 'info',
            showConfirmButton: true,
            timer: false,
            ruta: 'login'
        })
    })

    app.post('/login',async(req,res) => {
        let user = req.body;
   
        if(!user.user || !user.pass){
            res.render('login',{
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un usuario y contraseña",
                alertIcon: 'info',
                showConfirmButton: true,
                timer: false,
                ruta: 'login'
            })
        }
        else{
            login = await(loginController.login(user));
            if(login != "Usuario no autenticado"){
                console.log(login)
                res.redirect('/')
            }
            else{
                res.render('login',{
                    alert: true,
                    alertTitle: "Advertencia",
                    alertMessage: "Usuario y/o contraseña incorrectos",
                    alertIcon: 'info',
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'login'
                })
            }
        }

    });
};

