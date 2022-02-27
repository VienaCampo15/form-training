const users = []
document.getElementById("form").addEventListener('submit', function(event) {
     event.preventDefault();

     const user = {
          "name": document.getElementById("name").value,
          "email": document.getElementById("email").value,
          "password": document.getElementById("password").value
     }

     users.push(user)
})
  