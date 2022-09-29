const countries = ["Spanish", "Germany", "Italy", "Portugal", "France"];

//console.log(countries.slice(1, 4)); // return new array with the SLICE

console.log(countries.splice(0, 0)); // change structure of array. Remove values her (SPLICE)

console.log(countries.splice(1, 0, "Uruguai")); // add the value at the marked position

console.log(countries);
