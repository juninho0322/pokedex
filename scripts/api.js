export async function getAllPokemonNames() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1302");
  const pokemons = await response.json();
  const results = pokemons.results;
  const pokemonNames = results.map((pokemon) => pokemon.name);
  return pokemonNames;
}

export async function getPokemonDetails(pokemonName) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokemonDetails = await response.json();
  return pokemonDetails;
}
