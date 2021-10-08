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
            cashFlow: [table.month, table.amount],
            results: table.month,
            income: table.month,
            directCosts: table.month,
            expenses: table.month,
            costs    : table.month,
            summary: table.month,
        }
    )
    let data = await budgetModel.find({name:table.name}).exec();
    return data
    
}