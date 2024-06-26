// connexion à la base 

require('dotenv').config(); 
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => console.error('Failed to connect to MongoDB', err));

  //Model Person
  const { Schema, model } = mongoose;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});
const Person = model('Person', personSchema);

//Création d'un enregistrement
// const createAndSavePerson = async () => {
//   const person = new Person({
//     name: 'John Doe',
//     age: 25,
//     favoriteFoods: ['pizza', 'burger']
//   });

//   try {
//     const savedPerson = await person.save();
//     console.log('Person saved:', savedPerson);
//   } catch (err) {
//     console.error(err);
//   }
// };
// createAndSavePerson();


//Plusieurs enregistrement
// const createManyPeople = async (arrayOfPeople) => {
//   try {
/*/     const people = await Person.create(arrayOfPeople);
//     console.log('People saved:', people);
//   } catch (error) {
//     console.log(error)
//   }
// };

// const peopleArray = [
//   { name: 'Alice', age: 28, favoriteFoods: ['sushi', 'pasta'] },
//   { name: 'Bob', age: 22, favoriteFoods: ['steak', 'fries'] },
//   { name: 'Charlie', age: 30, favoriteFoods: ['salad', 'sandwich'] }
// ];

// createManyPeople(peopleArray);



// Utilisation de model.find()
/*const findPeopleByName = async (personName) => {

  try {
    const people = await Person.find({ name: personName })
    console.log('People found:', people);
  } catch (error) {
    console.log(error)
  }
   

};
findPeopleByName('Alice');*/

//Utilisation de model.findOne()
/*const findOneByFood = async (food) => {

  try {
    const people =  await Person.findOne({ favoriteFoods: food });
    console.log('Person found:', people);

  } catch (error) {
    console.log(error);
  }
};
findOneByFood('sushi');*/

//Utilisation de model.findById()
/*const findPersonById = async (personId) => {
  try {
    const person = await Person.findById(personId);
    if (person) {
      console.log('Person found by ID:', person);
    } else {
      console.log('No person found with this ID');
    }
  } catch (error) {
    console.error(error);
  }
};
findPersonById('667c216be3a5d6b4d59b65ef'); */

//Mise à jour d'un document
/*const findEditThenSave = async (personId) => {
  try {
    const person = await Person.findById(personId);
    if (person) {
      person.favoriteFoods.push('hamburger');
      person.markModified('favoriteFoods');
      const updatedPerson = await person.save();
      console.log('Updated person:', updatedPerson);
    } else {
      console.log('No person found with this ID');
    }
  } catch (error) {
    console.error(error);
  }
};
findEditThenSave('667c216be3a5d6b4d59b65ef'); */ 

//findAndUpdate
/*const findAndUpdate = async (personName) => {
  const ageToSet = 20;
  try {
    const updatedPerson = await Person.findOneAndUpdate(
      { name: personName },
      { age: ageToSet },
      { new: true }
    );
    console.log('Updated person:', updatedPerson);
  } catch (error) {
    console.error(error);
  }
};
findAndUpdate('Alice');*/

//removeById
/*const removeById = async (personId) => {
  try {
    const removedPerson = await Person.findByIdAndRemove(personId);
    console.log('Removed person:', removedPerson);
  } catch (err) {
    console.error(err);
  }
};
removeById('667c1f058616008b4c80f5a9'); */ 

/*removeManyPeople
const removeManyPeople = async (personName) => {
  try {
    const result = await Person.deleteMany({ name: personName });
    console.log('Result of remove:', result);
  } catch (err) {
    console.error(err);
  }
};

removeManyPeople('Mary');*/

/*queryChain
const queryChain = async () => {
  try {
    const data = await Person.find({ favoriteFoods: 'burritos' })
      .sort({ name: 1 })
      .limit(2)
      .select('-age')
      .exec();
    console.log('Query chain result:', data);
  } catch (err) {
    console.error(err);
  }
};*/