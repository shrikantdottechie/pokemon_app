const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const pokemon = require('./models/pokemon.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package
//const Show = require('./views/Show.jsx');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//index route = Show all

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});
/*
app.get('/pokemon', (req, res) => {
    res.send(pokemon);
});*/

app.get('/pokemon/', (req, res) => {
    //res.send(fruits);
    //res.render('Show');
    //res.send('<h1>See All The Pokemon!</h1');
    //res.render('Index',{pokemon:pokemon});
    res.render('Index');
});


//New - get a form to create a new record
//Delete - Delete  this one record
//Update - modifying a record
//Create - send the filled form to DB and create a new record
//Edit - go to DB to and get the record to update


//Show route = Show a particular record
//add show route
/*
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});*/

app.get('/pokemon/:indexOfPokemonArray', function(req, res){
    res.render('Show', { //second param must be an object
        pokemon: pokemon[req.params.indexOfPokemonArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
});    

app.listen(port, () => {
    console.log('listening');
});