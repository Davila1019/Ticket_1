const jwt = require('jsonwebtoken');
const loginModel = require("../model/loginModel")



        module.exports.login = async function (user){ 
            result = await loginModel.find({user:user.user}).exec();
            if(!result){
                return "Usuario no autenticado"
                
            }
            else{
                
                if(user.pass == result[0].password){
                    let token = jwt.sign({result},process.env.KEY)
                    return token
                }
                else{
                    return "Usuario no autenticado"
                }
            }
        }

        // let login = new loginModel();
        // let data= await login.find(user);
        // if(data){
        //     let token = jwt.sign({data},process.env.KEY,{
        //         expiresIn: process.env.JWT_EXPIRE
        //     }) // se agrega el usiario en corchetes para hacerlo como objeto
            
        //     return token;
        // } else{
        //     return "Usuario no autenticado"
        // }
        
    