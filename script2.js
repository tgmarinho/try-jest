// fetch nao pode ser usado no node pq fetch fica no window.fetch (Browser)
const fetch = require('node-fetch');

const getPeoplePromise = fetch => {
  return fetch('https://swapi.co/api/people')
    .then(response => response.json())
    .then(data => {
      return {
      count: data.count,
      results: data.results
    }
  })
}

const getPeople = async (fetch) => {
  const getRequest = await fetch('https://swapi.co/api/people')
   const data = await getRequest.json()
   return {
    count: data.count,
    results: data.results
  }
}

module.exports = {
  getPeople,
  getPeoplePromise
}