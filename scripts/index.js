let users = [];
const lis = document.getElementById("div-li");

const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")

document.getElementById("form").addEventListener("submit", function (event) {
     event.preventDefault();

     const user = {
          name: name.value,
          email: email.value,
          password: password.value,
     };

     users.push(user);
     console.log(users);

     addUserToDOM(user)

     localStorage.setItem("users", JSON.stringify(users));

     name.value = ''
     email.value = ''
     password.value = ''
});

users = JSON.parse(localStorage.getItem("users")) || [];

users.forEach((user) => {
     addUserToDOM(user)
});

function addUserToDOM(user){
     const string = `<p class = "name"> Nombre: ${user.name} </p> 
     <p class="email"> Email: ${user.email}</p>
     <p class ="password"> Password: ${user.password}</p>`;

     const li = document.createElement("li");
     li.innerHTML = string;

     lis.appendChild(li);
}