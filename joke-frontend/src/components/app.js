class App {
  constructor() {
    console.log("The app has loaded!")
    this.jokes = new Jokes()
    this.clearStorage()
  }

  clearStorage() {
    localStorage.clear()
  }

}