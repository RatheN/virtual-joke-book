class JokesAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/jokes"
  }

  getJokes() {
    return fetch(this.baseUrl).then(res => res.json())
  }

  getAndCreateJoke(id, phrase, punchline) {
    const joke = {
        user_id: id,
        phrase: phrase,
        punchline: punchline
    }

    return fetch(this.baseUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'content-type': 'application/json'
    }, 
    body: JSON.stringify({ joke })
})
}}