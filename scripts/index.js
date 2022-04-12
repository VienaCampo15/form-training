const users = []
lis = document.getElementById("div-li")
document.getElementById("form").addEventListener('submit', function(event) {
     event.preventDefault();

     const user = {
          "name": document.getElementById("name").value,
          "email": document.getElementById("email").value,
          "password": document.getElementById("password").value
     }

     users.push(user)
     string = `<p class = "name"> Nombre: ${user.name} </p> 
     <p class="email"> Email: ${user.email}</p>
     <p class ="password"> Password: ${user.password}</p>`
     const li = document.createElement("li");
     li.innerHTML = string
     console.log(users)
     
     lis.appendChild(li)
})







  