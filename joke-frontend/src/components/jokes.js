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

      this.loginForm = document.getElementById('login-form')
      this.newUserInput = document.querySelector('#new-user')
      this.loginForm.addEventListener('submit', this.loginUser.bind(this))

      this.jokeContainer = document.querySelector("#joke")
      this.punchlineContainer = document.querySelector("#punchline")

      this.randomJoke = document.querySelector("#randomize")
      this.randomJoke.addEventListener('click', (e) => {
        console.log(`The current joke is: ${this.currentJoke.phrase}`)
        this.randomizeJoke()
        this.displayJoke()
        console.log(`The current joke is: ${this.currentJoke.phrase}`)
      });

      this.punchline = document.querySelector("#punchlineBtn")
      this.punchline.addEventListener('click', (e) => {
        this.displayPunchline()
        console.log(`The current punchline is: ${this.currentJoke.punchline}`)
      });

    }

    loginUser(e) {
      e.preventDefault()
      console.log('e.target: ', e.target.childNodes[3].value);
      const btn = e.target.childNodes[3]
      const btnText = e.target.childNodes[3].value
      if (btnText == 'Login') {
          const value = this.newUserInput.value
          // this.userAdapter.getUsers()
          this.userAdapter.loginUser(value)
              .then(user => {
                  localStorage.setItem('currentUser', parseInt(user.id))
                  console.log(`currentUser ${user.name} set with id: ${localStorage.getItem('currentUser')}`);
              })
              .then(() => this.render())
          this.newUserInput.value = ""
          btn.setAttribute('value', 'Logout')
      } else {
          localStorage.clear()
          location.reload()
          btn.setAttribute('value', 'Login')
      } 
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
      const current_user = localStorage.getItem('currentUser')
      console.log("Saving the joke...")
      const phrase = this.phrase.innerText
      const punchline = this.punchline.innerText
  
      this.adapter.createJoke(current_user, phrase, punchline)
  
      .then(joke => {
        this.jokes.push(new Joke(joke))
        this.phrase.innerText = ''
        this.renderJokes()
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
      this.currentJoke = this.jokes.map(joke => joke.phrase)
        
    }

    randomizeJoke() {
      this.currentJoke = this.jokes[Math.floor(Math.random() * this.jokes.length)]
    }

    displayJoke() {
      this.jokeContainer.innerHTML = `The current joke is: ${this.currentJoke.phrase}`
    }

    displayPunchline() {
      this.punchlineContainer.innerHTML = `The punchline is: ${this.currentJoke.punchline}`
    }

    length() {
      this.jokes.length
    }


}