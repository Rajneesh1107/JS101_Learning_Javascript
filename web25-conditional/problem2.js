let details ={
  name :"Rajneesh Yadav",
  age: 21,
  father_name: "Prithveepal Yadav",
  mother_name: "Sona Devi",
  location: {
  city: "Jaunpur",
  pin_code:222175,
  state: "Uttar Prdesh",
  mobile_no:7054361919
  }
};
// console.log(details,"Welcome to Jaunpur");

for(let x in details){
  console.log(x);
  console.log(details[x]);
}
