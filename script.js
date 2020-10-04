function calculator(InputLine) {
  var error = 0,
    OutputNumber;
  let ArraySymbols = [];
  ArraySymbols = InputLine.split("");
  for (var i = 0; i < ArraySymbols.length; i++) {
    if (
      ArraySymbols[i] != "+" &&
      ArraySymbols[i] != "-" &&
      ArraySymbols[i] != "(" &&
      ArraySymbols[i] != ")" &&
      ArraySymbols[i] != "*" &&
      ArraySymbols[i] != "/"
    ) {
      if (isNaN(ArraySymbols[i]) != false) {
        error = 1;
      }
    }
  }
  if (error === 0) {
    OutputNumber = eval(InputLine);
  } else {
    OutputNumber = "The string contains nonnumeric characters";
  }
  return OutputNumber;
}
console.log(calculator("2/(-4)"));
