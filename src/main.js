import "./style.css";
import { getAllPokemonNames, getPokemonDetails } from "./scripts/api.js";

// Function to display the Pokémon names in a dropdown menu
function displayPokemonNamesInDropdown(names) {
  const appDiv = document.querySelector("#app");
  const options = names
    .map((name) => `<option value="${name}">${name}</option>`)
    .join("");
  appDiv.innerHTML = `
    <div class="flex flex-col items-center">
      <select id="pokemon-dropdown" class="mt-4 p-2 border border-gray-300 rounded">
        <option value="">Select a Pokémon</option>
        ${options}
      </select>
      <div id="pokemon-details" class="mt-4 w-full max-w-md"></div>
    </div>
  `;

  // Add event listener to the dropdown
  document
    .querySelector("#pokemon-dropdown")
    .addEventListener("change", (event) => {
      const selectedPokemon = event.target.value;
      if (selectedPokemon) {
        fetchAndDisplayPokemonDetails(selectedPokemon);
      } else {
        document.querySelector("#pokemon-details").innerHTML = "";
      }
    });
}

// Function to fetch and display Pokémon details
async function fetchAndDisplayPokemonDetails(pokemonName) {
  const pokemonDetails = await getPokemonDetails(pokemonName);
  const detailsDiv = document.querySelector("#pokemon-details");
  detailsDiv.innerHTML = `
    <div class="pokemon-card bg-white p-4 rounded shadow-md text-center">
      <h2 class="text-2xl font-bold capitalize">${pokemonDetails.name}</h2>
      <img class="mx-auto my-4" src="${
        pokemonDetails.sprites.front_default
      }" alt="${pokemonDetails.name}" />
      <p><strong>Height:</strong> ${pokemonDetails.height}</p>
      <p><strong>Weight:</strong> ${pokemonDetails.weight}</p>
      <p><strong>Type:</strong> ${pokemonDetails.types
        .map((typeInfo) => typeInfo.type.name)
        .join(", ")}</p>
    </div>
  `;
}

// Fetch the Pokémon names and display them in the dropdown menu
getAllPokemonNames().then((pokemonNames) => {
  // console.log(pokemonNames); // Optional: for debugging purposes
  displayPokemonNamesInDropdown(pokemonNames);
});
