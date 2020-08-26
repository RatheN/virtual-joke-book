class Jokes {
    constructor() {
      this.jokes = []
      this.adapter = new JokesAdapter()
      this.userAdapter = new UsersAdapter()
      this.length()
      this.initBindingsAndEventListeners()
      this.fetchAndLoadJokes()
    }

    initBindingsAndEventListeners(){

      this.renderForm = document.querySelector('#render-form')
      this.renderForm.addEventListener('click', (e) => {
        if (this.form.style.display == "none") {
          this.form.style.display = "block"
        } else {
          this.form.style.display = "none"
        }
      })

      this.form = document.querySelector("#form")
      this.nameInput = document.querySelector("#name")
      this.phraseInput = document.querySelector("#phrase")
      this.punchlineInput = document.querySelector("#punchline")
      this.submitButton = document.querySelector("#submit")
      this.submitButton.addEventListener('click', (e) => {
        this.createJoke(e)
        this.form.style.display = "none";
      });

      this.jokelistLink = document.querySelector("#show-jokelist")
      this.jokelistContainer = document.querySelector("#jokelist-container")
      this.jokelistLink.addEventListener('click', (e) => {
        if (this.jokelistContainer.style.display == "none") {
          this.jokelistContainer.style.display = "block"
        } else {
          this.jokelistContainer.style.display = "none"
        }
      });
      this.jokelist = document.querySelector("#jokelist")

      this.jokeContainer = document.querySelector("#joke")






      this.randomJoke = document.querySelector("#randomize")
      this.randomJoke.addEventListener('click', (e) => {
        this.randomizeJoke()
        this.displayJoke()
        console.log(`The current joke is: ${this.currentJoke.phrase}`)
      });


    }

    findUserByID(id) {
        console.log("Finding a user")
        console.log("Rendering...")
        console.log(this.users)
        let user = this.users.find(user => user.id == id )
        console.log(user)
        return user
    }

    createJoke(e) {
      e.preventDefault()
      console.log("Saving the joke...")
      const body = {
        name: this.nameInput.value,
        phrase: this.phraseInput.value,
        punchline: this.punchlineInput.value,
      }

      this.adapter.createJoke(body)

      .then(joke => {
        let jokeObject = `<li>${this.nameInput.value} - ${this.phraseInput.value} - ${this.punchlineInput.value}</li>`
        this.jokeContainer.innerHTML += jokeObject
        this.nameInput.value = ""
        this.phraseInput.value = ""
        this.punchlineInput.value = ""
        
      })
  
      document.getElementById("submit").disabled = true;
  
    }

    fetchAndLoadJokes() {
        this.adapter.getJokes()
        .then(jokes => {
          jokes.forEach(joke => this.jokes.push(new Joke(joke)))
        })
        .then(() => {
          this.renderJokes()
          
        })
    }

    renderJokes() {
      this.jokelistContainer.innerHTML = this.jokes.map(joke => `<li>${joke.user.name} - ${joke.phrase} - ${joke.punchline}</li>`).join('')
        
    }

    randomizeJoke() {
      this.currentJoke = this.jokes[Math.floor(Math.random() * this.jokes.length)]
    }

    displayJoke() {
      this.jokeContainer.innerHTML = `The current joke is: ${this.currentJoke.phrase} <br> The punchline is: ${this.currentJoke.punchline}`
    }

    displayPunchline() {
      this.punchlineContainer.innerHTML = `The punchline is: ${this.currentJoke.punchline}`
    }

    length() {
      this.jokes.length
    }

    renderForm() {
      this.form.style.display = "block"
    }


}