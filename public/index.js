
async function searchPokemon(id) {
  const URL = 'https://pokeapi.co/api/v2/pokemon/'
  const response = await fetch(`${URL}${id}`)
  const pokemon = await response.json()
  return pokemon
}

function updatePokemon(pokemon) {
  window.pokeImage.setAttribute('src', pokemon.sprites.front_default)
  window.pokeName.textContent = pokemon.name
}

async function init() {
  const firstPokemon = await searchPokemon(25)
  updatePokemon(firstPokemon)
}
init()

window.pokeButton.addEventListener('click', async _ => {
  if (window.pokeInput.value === '') {
    alert('You must to write a number to search a pokemon')
  }
  else if (window.pokeInput.value > 898) {
    alert('That pokemon does not exist try with other c:')
  }
  else {
    const pokemon = await searchPokemon(window.pokeInput.value)
    updatePokemon(pokemon)
  }
})
