const express = require("express");
const app = express();
const people = require("./people");
app.use(express.json());
const Joi = require("joi");

// display all the data in people.
app.get("/people", (req, res) => {
  res.send(people);
});

// display only the data for a person by the ID.
app.get("/people/:id", (req, res) => {
  const found = people.find((item) => item.id === parseInt(req.params.id));
  res.send(found);
});

// display all the cities in the array of objects.
app.get("/cities", (req, res) => {
  const cities = people.map((item) => item.city);
  res.send(cities);
});

// add a new record in the array of objects.
app.post("/people", (req, res) => {
  const schema = Joi.object({
    firstName: Joi.string().alphanum().min(3).required(),
    lastName: Joi.string().alphanum().min(3).required(),
    age: Joi.number().integer().positive().greater(0).less(100).required(),
    city: Joi.string().alphanum().min(3).required(),
  });

  const result = schema.validate(req.body);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const person = {
    id: people.length + 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    city: req.body.city,
  };
  people.push(person);
  res.send(people);
});

// update the age for the person by the ID.
app.put("/people/:id", (req, res) => {
  const newAge = req.body;
  const found = people.find((item) => item.id === parseInt(req.params.id));
  found.age = newAge.age;
  res.send(people);
});

app.delete("/people/:id", (req, res) => {
  const found = people.find((item) => item.id === parseInt(req.params.id));
  res.send(people.filter((item) => item.id !== found.id));
});

app.listen(3000, () => {
  console.log("App is listening on port 3000!");
});
