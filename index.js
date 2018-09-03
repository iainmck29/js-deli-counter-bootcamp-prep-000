function takeANumber(current, number) {
  var array = [];
  for (var i = 0; i < array.length; i++) {
    number = i + 1;
    array.push(`Welcome, ${current}. You are number ${number} in line`)
  } return array.splice(i, 1);
}