const section = document.querySelector("section");
var dataURL = "greek_myth_data.json";
var score = 0;
var button = document.getElementById("click");
var yesOrNo = document.getElementById("greetings");

// makes variables that are used by the Wikipedia section
var link = document.getElementById("wikipedia_link");
var image = document.getElementById("image");
var wikipediaPara = document.getElementById("para");
var numberOfQuestions = 20;

function randomNumFunc(maxi) {
  return Math.floor(Math.random() * maxi);
}

// the startAll function is the function where the data is fetched
async function startAll() {
  let response = await fetch(dataURL);
  let characters = await response.json();
  populateSection(characters);
}
startAll();

// this is the function where all the quiz part happens
function populateSection(jsonObj) {

  var questions = 0;
  var randomCharacter = randomNumFunc(jsonObj.characters.length);
  var character = Object.getOwnPropertyNames(jsonObj.characters[randomCharacter]);
  var randomRelation = character[randomNumFunc(character.length)];

  if (randomRelation === "name" || randomRelation === "wikipage") {
    while (randomRelation === "name" || randomRelation === "wikipage") {
      randomRelation = character[randomNumFunc(character.length)];
    }
  }


  var answer = jsonObj.characters[randomCharacter][randomRelation];
  var myPara = document.createElement("p");
  myPara.textContent = "Who is the " + randomRelation + " of " + jsonObj.characters[randomCharacter].name[0] + "?";
  section.appendChild(myPara);

  // this var is here to fix an "undefined" issue
  var cloneOfRandomRelation = randomRelation;

  // this function is invoked when the "submit" button is hit
  function myFunc() {
    // creates a function to get the summary of the Wikipedia page corresponding to the answer.
    async function wikipedia() {
      for (let i = 0; i < jsonObj.characters.length; i++) {
        if (jsonObj.characters[i].name[0] == answer[0]) {
          var wikipage = jsonObj.characters[i].wikipage;
        }
      }
      if (wikipage === undefined) {
        var wikipage = "greek_mythology";
      }
      // changes the url of element with the id "wikipedia_link" to a link to the Wikipedia page
      link.href = "https://en.wikipedia.org/wiki/" + wikipage;
      link.textContent = "Learn more about " + answer[0] + " on Wikipedia";
      // defines a variable for refering to the URL of the JSON file of the Wikipedia page.
      let url = "https://en.wikipedia.org/api/rest_v1/page/summary/" + wikipage;
      let response = await fetch(url);
      let json = await response.json();
      // changes the paragraph with the id "para" to the first paragraph on the Wikipedia page
      wikipediaPara.innerHTML = json.extract_html;
      // changes the <img> to the first image from the Wikipedia page
      image.src = json.thumbnail.source;
    }
    // calls the function we just created
    wikipedia()
      .catch(error => {
        console.log("error!!!")
        console.error(error)
      });
    questions++
    var textBox = document.getElementById("textInput").value;
    // makes the answer case insensitive by turning the answer array to a string then putting it to lower case and then putting it back to an array so the if function can read it
    var caseInsensitiveAnswer = answer.toString().toLowerCase().split(",");
    if (caseInsensitiveAnswer.includes(textBox.toLowerCase())) {
      score++;
      yesOrNo.innerHTML = "Bravo!<br>Your score is: " + score + "/" + questions;
    } else if (questions < numberOfQuestions) {
      yesOrNo.innerHTML = "The " + cloneOfRandomRelation + " of " + jsonObj.characters[randomCharacter].name[0] + " is " + answer[0] + ". Try again. <br> Your score is: " + score + "/" + questions;

    } else {
      yesOrNo.innerHTML = "";
      // clears the image
      image.src = "";
      // clears the paragraph
      wikipediaPara.textContent = "";
      // sets the link to nothing
      link.textContent = ""
    }
    document.getElementById("textInput").value = "";
    document.getElementById("textInput").focus();

    if (questions < numberOfQuestions) {
      randomCharacter = randomNumFunc(jsonObj.characters.length);
      character = Object.getOwnPropertyNames(jsonObj.characters[randomCharacter]);
      randomRelation = character[randomNumFunc(character.length)];
      if (randomRelation === "name" || randomRelation === "wikipage") {
        while (randomRelation === "name" || randomRelation === "wikipage") {
          var randomRelation = character[randomNumFunc(character.length)];
        }
      }

      answer = jsonObj.characters[randomCharacter][randomRelation];

      oldPara = document.querySelector("p");
      var myPara = document.createElement("p");
      myPara.textContent = "Who is the " + randomRelation +
        " of " + jsonObj.characters[randomCharacter].name[0] + "?";
    } else {
      oldPara = document.querySelector("p");
      var myPara = document.createElement("p");
      myPara.textContent = "You finished! You did " + score + " on " + numberOfQuestions;
    }
    section.replaceChild(myPara, oldPara);
    cloneOfRandomRelation = randomRelation;
  }
  input = document.getElementById("textInput");
  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("click").click();
    }
  });
  button.addEventListener("click", myFunc);
}
