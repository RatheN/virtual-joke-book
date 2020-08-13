class Jokes {
    constructor() {
        this.baseUrl = ('http://localhost:3000/jokes')
    }

    getJokes() {
        return fetch(this.baseUrl).then(response => response.json())
    }

    createJoke(id, phrase, punchline) {
        user_id: id 
        phrase: phrase
        punchline: punchline
    }

}