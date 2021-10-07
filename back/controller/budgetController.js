const budgetModel = require("../model/budgetModel")
const jwt = require('jsonwebtoken');



        module.exports.add = async function (budget){ 
            console.log(budget)
            let Budget ={
                name: budget.budget,
               date: new Date(),
                version: 1,
            }

            let newBudget = await new budgetModel(Budget).save()
            
            let token = jwt.sign({name: newBudget.name},process.env.KEY,{
                expiresIn: process.env.JWT_EXPIRE
            })
            return token
            
        }
