document.addEventListener('DOMContentLoaded', () => {
    const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Dog data (for demonstration purposes)
let dogs = [
  { id: 1, name: 'Buddy', breed: 'Labrador Retriever', sex: 'Male' },
  { id: 2, name: 'Max', breed: 'German Shepherd', sex: 'Male' },
  { id: 3, name: 'Lucy', breed: 'Golden Retriever', sex: 'Female' }
];

// GET endpoint to fetch all dogs
app.get('/dogs', (req, res) => {
  res.json(dogs);
});

// GET endpoint to fetch a specific dog by ID
app.get('/dogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const dog = dogs.find(dog => dog.id === id);

  if (!dog) {
    res.status(404).json({ error: 'Dog not found' });
  } else {
    res.json(dog);
  }
});

// PATCH endpoint to update a dog's information
app.patch('/dogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, breed, sex } = req.body;
  const dog = dogs.find(dog => dog.id === id);

  if (!dog) {
    res.status(404).json({ error: 'Dog not found' });
  } else {
    dog.name = name;
    dog.breed = breed;
    dog.sex = sex;
    res.json({ message: 'Dog information updated successfully' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
})
});