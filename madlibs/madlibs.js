const story = document.getElementById("story");

function storyOutput() {
  var noun = document.getElementById("noun").value;
  var adj = document.getElementById("adj").value;
  var person = document.getElementById("person").value;
  var storyDiv = person + " is a " + adj + " " + noun+".";
  document.getElementById("story").innerHTML = storyDiv;
}