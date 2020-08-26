
class JokesAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/jokes"
  }

  getJokes() {
    return fetch(`${this.baseUrl}`).then(res => res.json())
  }

  createJoke(data) {
    
    return fetch(this.baseUrl, {
      method: 'POST',
      headers: {
         'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
  }

}