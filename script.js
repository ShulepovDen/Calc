function calculator(stroka_vvoda) {
  var variable_oshibka = 0,output_number;
  let array_symbols = [];
  array_symbols = stroka_vvoda.split("");
  for (var i = 0; i <= array_symbols.length; i++) {
    if (array_symbols[i] != "+" && array_symbols[i] != "-") {
      if (isNaN(array_symbols[i]) != false) {
        variable_oshibka = 1;
      }
    }
  }
  if (variable_oshibka === 0) {
    output_number = eval(stroka_vvoda);
  }
  else{
    output_number="The string contains nonnumeric characters";
  }
  return output_number;
}
