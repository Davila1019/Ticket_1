const sequelize = require('../db/conexion');
const {promisify} = require('util');
const jwt = require('jsonwebtoken');

module.exports.isAuthenticated = async (req,res,next) =>{
    if(req.cookies.jwt){
        try{
            
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.KEY)
            const data = decodificada.data;
            let result = await sequelize.query("SELECT [name],username FROM users WHERE username ='"+ data.username+"'");
            
            if(result){
                req.user = data
                return next()
            }
            
                
            
            
        }
        catch(error){
            console.log(error)
            res.redirect('/login')
        }
    }
    else{
        res.redirect('/login')
    }
}