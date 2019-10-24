// import mongoose
// setup Hero model
// to setup a get route at /api/heroes
// to setup a post route at /api/heroes
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Hero = require("./models/Hero");

// you need these lines of code to show objects on front end
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// setup our mongo connection
mongoose.connect("mongodb://localhost/heroesdb",{
  useNewUrlParser:true,
  useUnifiedTopology: true
});

const PORT = process.env.PORT || 5000;

app.get("/api/heroes", (req, res) => {
  // first parameter in mongoose "find" method is how you want to find the object
  // second parameter in mongoose method is a callback function
  // the call back function takes 2 parameters
  // the first is an error object
  // the second is what object you are "finding"
  Hero.find({}, function(err, foundHeroes){
    res.send(foundHeroes);
  });
});

app.post("/api/heroes", (req, res) => {
  // set a new variable of the model you want to create
  let newHero = {
    // use the names from you model as "keys"
    // use req.body."name of variable in your mongoose model schema" as the "values"
    name: req.body.name,
    powerLevel: req.body.powerLevel,
    ability: req.body. ability
  }
  // use create method to create NEW version of your model
  // crete method takes 2 parameters
  // first parameter is the object created above with the req.body info
  // second parameter is a callback used to tell you app what to do AFTER the new model is created
  Hero.create(newHero, function(err, newlyCreated){
    res.redirect("/api/heroes");
  })
});
// listening port
app.listen(PORT, function() {
  console.log("Listening on port " + PORT);
})