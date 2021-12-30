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
    "lion",
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

// Generate a random answer
const randAnswer = () => {
  const answer = [
    "to get to the other side!",
    "to go to the library and do some research for their history project!",
    "they thought they saw a very large burrito on the other side, but were disapointed to find it was only a small child.",
    "that's where there work was. And although they weren't working that day, they had forgotten there umbrella there and it was starting to rain.",
    "to get to the other PRIDE!",
    "it was their TOP SECRET MISSION. Now I'm sorry, but we will have to have you killed.",
    "just to eat some bananas.",
    "maybe they wanted to... eat some bananas.",
    `because the ${randomAnimal()} was chasing them!`,
    `because they thought they saw a delicioius ${randomAnimal()}!`,
  ];
  return answer[Math.floor(Math.random() * answer.length)];
};
