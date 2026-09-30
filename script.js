let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  if (name === "" || age === "") {
    alert("Please enter valid details.");
    return;
  }

  new Promise((resolve, reject) => {
    if (age > 18) {
      setTimeout(() => {
        resolve(`Welcome ${name}, You can vote.`);
      }, 4000);
    } else {
      setTimeout(() => {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }, 4000);
    }
  })
    .then((data) => {
      alert(data);
    })
    .catch((error) => {
      alert(error);
    });
});