const budgetModel = require("../model/budgetModel")
const {promisify} = require('util');
const jwt = require('jsonwebtoken');


module.exports.get = async function(name){
    let data = await budgetModel.find({name:name}).exec();
    
    return data
}


module.exports.add = async function (table){
    
    await budgetModel.insertMany(

        {   name: table.name,
            cashFlow: table.cashFlow,
            results: table.results,
            income: table.results,
            directCosts: table.results,
            expenses: table.results,
            costs    : table.results,
            summary: table.results,
        }
    )
    let data = await budgetModel.find({name:table.name}).exec();
    return data
    
}