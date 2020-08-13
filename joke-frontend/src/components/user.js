class User {
  constructor(userJSON) {
    this.id = userJSON.id
    this.name = userJSON.name
    this.jokes = userJSON.jokes
  }
}