const loginModel = require("../model/loginModel")





        module.exports.add = async function (user){
            console.log(user.user)  
            let User ={
                user: user.user,
                password: user.password,
                name: user.name
            }

            let newUser = await new loginModel(user).save()
            return newUser
            
        }