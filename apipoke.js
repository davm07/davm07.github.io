const url = 'https://pokeapi.co/api/v2/pokemon/'
let results = null
let parentElement = document.querySelector('#pokemonList')

async function getPokemon(url) {
  const response = await fetch(url)
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json()
    doStuff(data)
  }
}

function doStuff(data) {
  //   let select = '<select name="pokemonList" id="pokemonList">'
  //   select += '<option value="">Choose one pokemon</option>'
  //   data.results.forEach((element) => {
  //     select += `<option value="${element.name}">${element.name}</option>`
  //   })
  //   select += '</select>'
  //   parentElement.insertAdjacentHTML('afterbegin', select)
  let options = '<option value="">Choose one pokemon</option>'
  data.results.forEach((element) => {
    options += `<option value="${element.name}">${element.name}</option>`
  })
  parentElement.innerHTML = options
}
getPokemon(url)
console.log('second: ', results)
