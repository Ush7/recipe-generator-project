function displayResultrecipe(response) {
  new Typewriter("#resultRecipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}
function generateRecipe(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "3eo0fetfbb61a575e45b64ff05342834";
  let context =
    "You are AI Kitchen assistant, your objective is to generate recipe from ingredients or from recipe ideas. Make sure the answer is concise in basic HTML and contents title,Ingredients and Steps";
  let prompt = `User instructions: Generate a recipe ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeGeneratorformElement = document.querySelector("#resultRecipe");
  recipeGeneratorformElement.innerHTML = `<div class="generating">👩🏽‍🍳🍽Cooking the recipe for you !</div>`;
  axios.get(apiUrl).then(displayResultrecipe);
}

let recipeGeneratorformElement = document.querySelector(
  "#recipe-generate-form"
);
recipeGeneratorformElement.addEventListener("submit", generateRecipe);
