//
// ./api/v1/recipe.routes.v1.js
//
var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Recipe = require('../model/recipe.model');

//
// Geef een lijst van alle users.
//
routes.get('/recipes', function (req, res) {
    res.contentType('application/json');

    Recipe.find({})
        .then(function (recipes) {
            res.status(200).json(recipes);
        })
        .catch((error) => {
            res.status(400).json(error);
});
});

//
// Retourneer één specifieke users. Hier maken we gebruik van URL parameters.
// Vorm van de URL: http://hostname:3000/api/v1/users/23
//
routes.get('/recipes/:id', function (req, res) {

});

//
// Voeg een user toe. De nieuwe info wordt gestuurd via de body van de request message.
// Vorm van de URL: POST http://hostname:3000/api/v1/users
//
routes.post('/recipes', function (req, res) {

});

//
// Wijzig een bestaande user. De nieuwe info wordt gestuurd via de body van de request message.
// Er zijn twee manieren om de id van de users mee te geven: via de request parameters (doen we hier)
// of als property in de request body.
// 
// Vorm van de URL: PUT http://hostname:3000/api/v1/users/23
//
routes.put('/recipes/:id', function (req, res) {

});

//
// Verwijder een bestaande user.
// Er zijn twee manieren om de id van de users mee te geven: via de request parameters (doen we hier)
// of als property in de request body.
// 
// Vorm van de URL: DELETE http://hostname:3000/api/v1/users/23
//
routes.delete('/recipes/:id', function (req, res) {

});

module.exports = routes;