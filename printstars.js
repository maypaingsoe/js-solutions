function stars() {
  var input = Number(prompt("enter the number of stars u want."));

  for (k = 1; k <= input; k++) {
    document.write("*" + "<br>");
  }
  return "*";
}
stars();
