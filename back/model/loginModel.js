const sequelize = require('../db/conexion');

module.exports = class loginModel {
    async find (user){
        let result = await sequelize.query("SELECT [name],username FROM users WHERE username = '" + user.user +"' AND [password] = '"+user.pass+"'");
        if (result[0].length > 0) {
            if (user.user == result[0][0].username) {
                return result[0][0];
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}