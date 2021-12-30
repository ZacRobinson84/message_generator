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
    "To get to the other side!",
    "To go to the library and do some research for their history project!",
    "They thought they saw a very large burrito on the other side, but were disapointed to find it was only a small child.",
    "That's where their work was. And although they weren't working that day, they had forgotten there umbrella there and it was starting to rain.",
    "It was their TOP SECRET MISSION. Now I'm sorry, but we will have to have you killed.",
    "Just to eat some bananas.",
    "Maybe they wanted to... eat some bananas.",
    `Because the ${randomAnimal()} was chasing them!`,
    `Because they thought they saw a delicioius ${randomAnimal()}!`,
  ];
  return answer[Math.floor(Math.random() * answer.length)];
};

// Function to display the final joke with a small time delay between question and answer
const displayJoke = () => {
  console.log(`Why did the ${randomAnimal()} cross the ${randCrossObject()}?`);
  setTimeout(() => {
    console.log(`${randAnswer()}`);
  }, 2300);
};
displayJoke();
