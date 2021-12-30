// A 'Why did the chicken cross the road' type joke generator

// Generate a random animal
const randomAnimal = () => {
  const animals = [
    "chicken",
    "panda bear",
    "cat",
    "dog",
    "fish",
    "gorilla",
    "snake",
    "rhinoceros",
    "bumble bee",
    "spider",
  ];
  return animals[Math.floor(Math.random() * animals.length)];
};

// Generate a random thing to be crossed
const randCrossObject = () => {
  const crossObj = [
    "road",
    "lake",
    "bridge",
    "ocean",
    "dessert",
    "plains",
    "forest",
    "bike lane",
    "highway",
    "train tracks",
    "galaxy",
  ];
  return crossObj[Math.floor(Math.random() * crossObj.length)];
};
