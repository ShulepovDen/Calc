function calculator(inputLine) {
  var error = 0,
    result;
  let inputLineCharacters = [];
  inputLineCharacters = inputLine.split("");
  for (var i = 0; i < inputLineCharacters.length; i++) {
    if (
      inputLineCharacters[i] !== "+" &&
      inputLineCharacters[i] !== "-" &&
      inputLineCharacters[i] !== "(" &&
      inputLineCharacters[i] !== ")" &&
      inputLineCharacters[i] !== "*" &&
      inputLineCharacters[i] !== "/"
    ) {
      if (isNaN(inputLineCharacters[i]) !== false) {
        error = 1;
      }
    }
  }
  if (error === 0) {
    result = eval(inputLine);
  } else {
    result = "The string contains nonnumeric characters";
  }
  return result;
}
console.log(calculator("2*(-4)"));
