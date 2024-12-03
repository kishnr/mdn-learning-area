//Variables to initialize the textbox name addition and a
//button to randomize and a space for the story to appear
const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

//Function to randomly choose a value from the given
//values to create a story
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

let storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertx = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let inserty = ["the soup kitchen", "Disneyland", "the White House"];
let insertz = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

randomize.addEventListener("click", result);

function result() {

    let newStory = storyText;

    const xItem = randomValueFromArray(insertx);
    const yItem = randomValueFromArray(inserty);
    const zItem = randomValueFromArray(insertz);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);


  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob",name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round((300 / 14)) + " Stones";
    const temperature = Math.round((94-32) / 1.8) + " Celsius";

    newStory = newStory.replaceAll("300 pounds", weight);
    newStory = newStory.replaceAll("94 fahrenheit", temperature);

  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
