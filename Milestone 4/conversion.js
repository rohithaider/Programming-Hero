//converting inch to feet

function inchToFeet(inch) {
  let result = 0;
  result = inch / 12;
  return result;
}
let inchVariable = 34;
let result = inchToFeet(inchVariable).toFixed(2);
console.log(
  `You converted ${inchVariable} to feet which is approx ${result} feet`
);
