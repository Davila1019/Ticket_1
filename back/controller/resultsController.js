const budgetModel = require("../model/budgetModel")



module.exports.get = async function(name){
    let data = await budgetModel.find({name:name}).exec();
    
    return data
}
