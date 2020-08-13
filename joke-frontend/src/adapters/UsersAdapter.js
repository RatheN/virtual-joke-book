class UsersAdapter {
  constructor() {
      this.baseUrl = ('http://localhost:3000/users')
  }

  loginUser(value) {
    const user = {
        name: value
    }
    return fetch(`${this.baserUrl}`, { // causing an error, method not allowed
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }, 
        body: JSON.stringify({ user })
    }).then(response => response.json())
}


}