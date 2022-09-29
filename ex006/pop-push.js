const ranking = [300, 250, 200, 500, 122, 177];

// ranking.sort().reverse();

const removido = ranking.pop(); //remove last value in array

ranking.push(1000);

ranking.sort(function (a, b) {
  return a - b; // receive personality function (A-B crescent or B-A decrescent)
});

console.log(ranking);
console.log(removido);
