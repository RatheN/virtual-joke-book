class Joke {
    constructor(jokeJSON) {
        this.id = jokeJSON.id
        this.user = jokeJSON.user
        this.user_id = jokeJSON.user_id
        this.phrase = jokeJSON.phrase
        this.punchline = jokeJSON.punchline
    }

    renderLi(){
        return `<li data-id=${this.id}>${this.name}<a>Delete</a></li>`
    }
}