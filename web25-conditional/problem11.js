
let lower_char=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","w","x","y","z"];
let upper_char=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let char="k";
for(i=0; i<lower_char.length; i++){
  if(char==lower_char[i]){
    char=upper_char[i];
    break;
  }
}console.log(char);