var fruits = {
  question : "Which fruit do you like?",
  option1 : "Apple",
  option2 : "Avocado",
  option3 : "Banana",
}; 
document.getElementById("question").innerHTML= "<p>" + fruits.question + "</p>";
function chosenFruit(){   
    var options= document.getElementsByClassName("options");
    options[0].innerHTML= fruits.option1;
    options[1].innerHTML= fruits.option2;
    options[2].innerHTML= fruits.option3;

    if(options[0].checked == true){
      alert("You chose "+ fruits.option1);
    }else if(options[1].checked == true){
        alert("You chose "+ fruits.option2);
    }else if(options[2].checked == true){
        alert("You chose "+ fruits.option3);
    }else{
        alert("Please choose one fruit.");
    }
  }
