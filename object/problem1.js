let arr= ["Rajneesh", "Aman",
         "Shivansh", "Saurabh", 
         "Rajneesh", "Saurabh","Prashant","Vinay","Rajneesh", "Aman"];



let object= {};

for(let i=0;i<arr.length;i++){

  
  object[arr[i]]= 1;
}

console.log(object);