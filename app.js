const express = require('express');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const sequileze = require('./back/db/conexion');
const loginView = require('./back/view/loginView');
const homeView = require('./back/view/homeView')
const budgetView = require('./back/view/budgetView')
const cashFlowView = require('./back/view/cashFlowView')
const resultsView = require('./back/view/resultsView')
const incomes = require('./back/view/incomes')
const register = require('./back/view/registerView')
const app = express();


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());
app.use(cookieParser());

app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.set('views', __dirname + '/views');

// async function serverStart() {
//     try {
//         await sequileze.authenticate();
//         console.log("Conexión estabilizada correctamente")
//         app.listen(process.env.PORT, function () {
//             console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.error('No se pudo conectar correctamente con la Base de datos:', error);
//     }
// }

// serverStart();


async function iniciarServidor() {
    mongoose.connect(process.env.DB_HOST + process.env.DB_DATABASE,
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        }).then(r => {
        app.listen(process.env.PORT, () => {
            console.log("Servidor Iniciado en el puerto " + process.env.PORT)

        })
    }).catch(error => {
        console.log(error)
        console.log("No pude conectar a la base de datos")
    })
}

iniciarServidor();

//Iniciamos vistas de la app

loginView(app);
homeView(app);
budgetView(app);
cashFlowView(app);
register(app);
resultsView(app);
// incomes(app);