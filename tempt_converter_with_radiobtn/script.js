function convertedValue() {
    var unit = document.getElementsByClassName("unit");
    var tempt = document.getElementById("tempt").value;
    if (unit[0].checked == true) {
      console.log(fahrToCenti(tempt));
      document.getElementById("conversion").innerHTML = fahrToCenti(tempt);
    } else if (unit[1].checked == true) {
          document.getElementById("conversion").innerHTML = centiToFahr(tempt);
      console.log(centiToFahr(tempt));
    } else {
      console.log("please choose one unit");
    }
  }
  
  function fahrToCenti(fahr) {
    var centi = (5 / 9) * (fahr - 32);
    return centi;
  }
  function centiToFahr(centi) {
    var fahr = centi + 9 / 5 + 32;
    return fahr;
  }
  
  