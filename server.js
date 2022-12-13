require('dotenv').config();
const express = require('express');
const app = express();
//include the method-override package place this where you instructor places it
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const Pokemon = require('./models/pokemon.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package
//...
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));
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
app.delete('/pokemon/:id', (req, res)=>{
    Pokemon.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/pokemon');//redirect back to pokemon index
    });
});
//Update - modifying a record
app.put('/pokemon/:id', (req, res)=>{
    
    Pokemon.findByIdAndUpdate(req.params.id, req.body, (err, updatedPokemon)=>{
       console.log(updatedPokemon)
        res.redirect(`/pokemon/${req.params.id}`);
    });
});
//Create - send the filled form to DB and create a new record
app.post('/pokemon', (req, res) => {

    Pokemon.create(req.body, (error, createdPokemon) => {
        res.redirect('/pokemon'); // send the user back to /pokemon
    });

});
//Edit - go to DB to and get the record to update
app.get('/pokemon/:id/edit', (req, res)=>{
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{ //find the pokemon
      if(!err){
        res.render(
    		  'Edit',
    		{
    			pokemon: foundPokemon //pass in the found pokemon so we can prefill the form
    		}
    	);
    } else {
      res.send({ msg: err.message })
    }
    });
});

//Show route = Show a particular record
//add show route

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


app.listen(port, () => {
    console.log('listening');
});