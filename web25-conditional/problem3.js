
// Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

let yob=2008;
let age=2022-yob;
if (age<=19&&age>=13){
  console.log("Teenage")
}else if (age<=29&&age>=20){
  console.log("Twenties")
}