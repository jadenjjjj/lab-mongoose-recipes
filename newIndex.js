const mongoose = require('mongoose');

const Recipe = require('./models/Recipe.model');
const data = require('./data')


const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

let newRecipe = {
    title: "miXto quente",
    level: "Easy Peasy",
    ingredients: ["pão francês", "queijo", "presunto"],
    cuisine: "Brasileira",
    dishType: "snack",
    image:
      "http://culinaria.culturamix.com/blog/wp-content/gallery/misto-quente-3/Misto-Quente-6.jpg",
    duration: 5,
    creator: "JOC",
  };


async function dataBaseManage() {
    try {
        let x = await mongoose.connect(MONGODB_URI)
        console.log(`Connected to the database: "${x.connection.name}"`);

        await Recipe.deleteMany();

        let createdRecipe = await Recipe.create(newRecipe)
        console.log(`Recipe added: ${createdRecipe.title}`)

        let insetedRecipes =  await Recipe.insertMany(data);
        insetedRecipes.forEach((eachRecipe) => console.log(`recipe for ${eachRecipe.title} inserted suceessfully`));

        let updateRecipe = await Recipe.findOneAndUpdate({ title: })
    }
}