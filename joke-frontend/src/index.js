

const BASE_URL = 'http://localhost:3000'
const USERS_URL = `${BASE_URL}/users`
const JOKES_URL = `${BASE_URL}/jokes`


document.addEventListener('DOMContentLoaded', () => {
   fetchUsers()
   const app = new App()
})

function fetchUsers() {
    console.log('Loaded!')
    fetch(USERS_URL)
    .then(function(resp) {
        return resp.json()
    })
    .then(function(users) {
        console.log(users)
    })
}