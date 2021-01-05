/*Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
*/

function calculateDogAge(dogAge) {
  var dogYears = dogAge * 7;
  return "Your doggie is " + dogYears + " years old in dog years!"
;
}
calculateDogAge(2);
calculateDogAge(3);
calculateDogAge(4);



