function changeColor(number) {
  if (number == 1) {
    if (document.getElementById("name").value != "") {
      document.getElementById("name").style.backgroundColor = "yellow";
    } else {
      document.getElementById("name").style.backgroundColor = "white";
    }
  }
  if (number == 2) {
    if (document.getElementById("phone").value != "") {
        document.getElementById("phone").style.backgroundColor = "yellow";
      } else {
        document.getElementById("phone").style.backgroundColor = "white";
      }
  }
  if (number == 3) {
    if (document.getElementById("email").value != "") {
        document.getElementById("email").style.backgroundColor = "yellow";
      } else {
        document.getElementById("email").style.backgroundColor = "white";
      }
}
}