const budgetModel = require("../model/budgetModel")
const {promisify} = require('util');
const jwt = require('jsonwebtoken');
let datag;

module.exports.get = async function(name){
    let data = await Model.find({name:name}).exec();
    datag = data;
    console.log(data.ida)
    return data
}


module.exports.add = async function (table){
    
<<<<<<< HEAD
    await budgetModel.findByIdAndUpdate({
=======
    await budgetModel.findByIdAndUpdate(datag.id, {
>>>>>>> bf123d0 (Iteraciòn (Agregar el middleware de autenticacion a toda la aplicaciòn))
         $push: { 'incomin': table.incomin } 
        
        })
    
    let data = await budgetModel.find({name:table.name}).exec();
    return data
    
}