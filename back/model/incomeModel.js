const {Schema, model} = require('mongoose');

const incomeSchema = new Schema({
    
    income:{
        type: Array,
        required: false
    }
})



module.exports = model('incomes',incomeSchema)