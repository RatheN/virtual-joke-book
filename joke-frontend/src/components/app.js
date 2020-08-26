class App {
  constructor() {
    console.log("The app has loaded!")
    this.jokes = new Jokes()
    this.users = new Users()
  }
}