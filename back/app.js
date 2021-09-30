const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const sequileze = require('./db/conexion');
const loginView = require('./view/loginView');
const app = express();

app.use(express.json())
app.use(cors());

app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.set('views', __dirname + '/views');
console.log()
async function serverStart() {
    try {
        await sequileze.authenticate();
        console.log("Conexión estabilizada correctamente")
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
        });
    } catch (error) {
        console.error('No se pudo conectar correctamente con la Base de datos:', error);
    }
}

serverStart();

//Iniciamos vistas de la app

loginView(app);
