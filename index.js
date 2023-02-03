const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');
const { create } = require('./models/Recipe.model');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });


    //Create a receipe
    const receipecreate = {
      title:'CHINESE TOMATO EGG',
      level: 'Easy Peasy',
      ingredient: ['eggs', 'tomatos'],
      cuisine: 'China',
      dishType: 'main_course',
      image: './images/1',
      duration: 3,
      creator: 'c'
    };

    // Catch err if when have err
    Recipe
      .create(receipecreate)
      .then((result) => {console.log(`create  receipe ${result.title}`)
    })
      .catch((err) => 
      {console.log('There was a err', err)
    });

    //Insert multipe data
    Recipe
    .insertMany(data)
    .then((result) => {
      result.forEach(item => {
        console.log('Inserted successfully');
      })
    .catch((err) => 
    {console.log('There was a err'), err})
    });

    //update one receipe array
    Recipe.
    updateOne({title: 'CHINESE TOMATO EGG'}, {duration: 3 })
    .then(() => {console.log('The recipe is updated')
  })
  .catch((err) => 
  {console.log('There was a err', err)});


  //delete
  Recipe
    .deleteOne({title: 'Orange and Milk-Braised Pork Carnitas'})
    .then(() => {console.log('The recipe is deleted')
  })
    .catch((err) => 
    {console.log('There was a err', err)
  });

  /*
  mongoose.connection
  .
    
    */
