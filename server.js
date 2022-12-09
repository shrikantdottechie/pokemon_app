require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
const Pokemon = require('./models/pokemon.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

//near the top, around other app.use() calls
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//... and then farther down the file
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});
mongoose.set('strictQuery', true);

//index route = Show all

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});
/*
app.get('/pokemon', (req, res) => {
    res.send(pokemon);
});*/

app.get('/pokemon', (req, res) => {
    //res.send(fruits);
    //res.render('Show');
    //res.send('<h1>See All The Pokemon!</h1');
    Pokemon.find({}, (err, allPokemon) => {
        res.render('Index', { //second param must be an object
            pokemon: allPokemon// getting all pokemon from db to pass as props
        });

    });

});
//New - get a form to create a new record
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

//Delete - Delete  this one record
//Update - modifying a record
//Create - send the filled form to DB and create a new record
app.post('/pokemon', (req, res) => {

    Pokemon.create(req.body, (error, createdPokemon) => {
        res.redirect('/pokemon'); // send the user back to /pokemon
    });

});
//Edit - go to DB to and get the record to update


//Show route = Show a particular record
//add show route

/*app.get('/pokemon/:id', (req, res) => {
    console.log(req.params);
    res.send(req.params.id);
});*/
app.get('/pokemon/:id', function (req, res) {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        res.render('Show', { //second param must be an object
            pokemon: foundPokemon
        });
    });
});
/*
app.get('/pokemon/:id', (req, res) => {
    console.log(req.params);
    res.render('Show', { pokemon: pokemon[req.params.id] });
});
*/
/*
app.get('/pokemon/:id', function(req, res){
    res.render('Show', { //second param must be an object
        pokemon: pokemon[req.params.id] //there will be a variable available inside the ejs file called pokemon, its value is pokemon[req.params.id]
    });
});   
*/

app.listen(port, () => {
    console.log('listening');
});