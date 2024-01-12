function generateRecipe(event) {
  event.preventDefault();
  new Typewriter("#resultRecipe", {
    strings:
      "🍝 Your recipe will be generated here,🧂 Your ingredients will be generated here",
    autoStart: true,
    cursor: null,
    delay: 10,
  });
}

let recipeGeneratorformElement = document.querySelector(
  "#recipe-generate-form"
);
recipeGeneratorformElement.addEventListener("submit", generateRecipe);
