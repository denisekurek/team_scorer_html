const uba = document.getElementById("backButtonUBA");
const fed = document.getElementById("backButtonFED");

uba.addEventListener("click", myFunction);
fed.addEventListener("click", myFunction);

function myFunction() {
  console.log('Clicked Back Button');
}