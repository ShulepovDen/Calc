function calc(stroka_vvoda) {
  var oshibka = 0,
    chislo;
  let arr = [];
  arr = stroka_vvoda.split("");
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] != "+" && arr[i] != "-") {
      if (isNaN(arr[i]) != false) {
        oshibka = 1;
      }
    }
  }
  console.log(oshibka);
  if (oshibka === 0) {
    chislo = eval(stroka_vvoda);
  }
  return chislo;
}
