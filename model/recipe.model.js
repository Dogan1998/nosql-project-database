const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    imagePath: String,
    ingredients: [{
        name: String,
        amount: Number
    }]
}, {
    timestamps: true
});


const Recipe = mongoose.model('recipe', RecipeSchema);

// Add a 'dummy' user (every time you require this file!)
const recipe = new Recipe({
    name: 'kroket',
    description: 'Lekkere kroket',
    imagePath: 'http://moniquevandervloed.nl/wp-content/uploads/2017/05/kroket1.jpg',
    ingredients: [
        { name: 'vlees', amount: 1000 },
        { name: 'korst', amount: 20}
    ]
}) //.save();

module.exports = Recipe;