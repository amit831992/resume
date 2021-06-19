function myFunction() {
    var x = document.getElementById("ddm");
    if (x.className === "menu") {
      x.className += " drop";
    } else {
      x.className = "menu";
    }
  }