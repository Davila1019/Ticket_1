const {Schema, model} = require('mongoose');

const budgetSchema = new Schema({
    name:{
        type: String,
        required: false
    },
    date:{
        type:Date,
        required:false
    },
    version:{
        type: Number,
        required: false
    },
    cashFlow:{
       type:Array,
       required:false
    },
    results:{
        type: Array,
        required: false
    },
    income:{
        type: Array,
        required: false
    },
    directCosts:{
        type: Array,
        required: false
    },
    expenses:{
        type: Array,
        required: false
    },
    resource:{
        type: Array,
        required: false
    },
    costs:{
        type: Array,
        required: false
    },
    summary:{
        type: Array,
        required: false
    },budget:{
        type: Array,
        required: false
    }

})



module.exports = model('budgets',budgetSchema)

