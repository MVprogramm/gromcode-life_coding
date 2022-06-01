const formElem = document.querySelector(".login-form");

const serverUrl = "https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users";

function creatUserHandler(event) {
  event.preventDefault();
  console.log("test");
}

const user = {
  email: "user@gmail.com",
  name: "Michael",
  password: "1111",
};

fetch(serverUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(user),
})
  .then((res) => res.json())
  .then((result) => console.log(result));

formElem.addEventListener("submit", creatUserHandler);
