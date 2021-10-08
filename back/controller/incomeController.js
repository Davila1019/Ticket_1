const budgetModel = require("../model/budgetModel")
const {promisify} = require('util');
const jwt = require('jsonwebtoken');
let datag;

module.exports.get = async function(name){
    let data = await budgetModel.find({name:name}).exec();
    datag = data;
    console.log(data.ida)
    return data
}


module.exports.add = async function (table){
    
    await budgetModel.findByIdAndUpdate(, {
         $push: { 'incomin': table.incomin } 
        
        })
    
    let data = await budgetModel.find({name:table.name}).exec();
    return data
    
}