class Users {
  constructor() {
    this.users = []
    this.adapter = new UsersAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadUsers()
  }

  initBindingsAndEventListeners() {


    this.renderUserForm = document.querySelector('#render-user-form')
    this.renderUserForm.addEventListener('click', (e) => {
      if (this.userForm.style.display == "none") {
        this.userForm.style.display = "block"
      } else {
        this.userForm.style.display = "none"
      }
    });

    this.userForm = document.querySelector("#user-form")
    this.newUserInput = document.querySelector("#new-user")
    this.submitButton = document.querySelector("#submit-user")
    this.submitButton.addEventListener('click', (e) => {
      this.createUser(e)
      this.userForm.style.display = "none";
    });

  }

  
  createUser(e) {
    e.preventDefault()
    console.log("Saving the user...")
    const body = {
      name: this.newUserInput.value,
    }

    this.adapter.createUser(body)

    .then(user => {
      localStorage.setItem('currentUser', parseInt(user.id))
      console.log(`currentUser ${user.name} ${user.id} set with id: ${localStorage.getItem('currentUser')}`);
    })
    .then(() => this.newUserInput.value = "")
    
} 






  fetchAndLoadUsers() {
    this.adapter.getUsers()
    .then(users => {
      users.forEach(user => this.users.push(user))
    })
    .then(() => {
    })
  }


}