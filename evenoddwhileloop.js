var num = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var i = 0;
while (num[i]) {
  if (num[i] % 2 == 0) {
    console.log(num[i] + ' even.');
  } else {
    console.log(num[i] + ' odd.');
  }
i++;
}
