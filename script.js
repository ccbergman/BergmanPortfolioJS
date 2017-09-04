function navBar() {
    document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(clickedId) {
  if (!clickedId.target.matches('.dropbtn') && !clickedId.target.matches('.dogbtn') ) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function favoriteDog() {
  var dogText = document.getElementById("favDogTextbox").value;
  if (dogText.length === 0) {
    dogText = "You didn't tell me your favorite dog, try again.";
  } else {
    dogText = dogText + ", WOOF!";
  }
  document.getElementById("modifiedDogText").innerHTML = dogText;
}
