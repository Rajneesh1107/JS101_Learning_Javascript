

let arr=[2,56,7,9,12,29,35];

let sum=0;
let count=0;
for(i=0; i<arr.length; i++){
  if(arr[i]%2===0){
    sum+=arr[i];
    count+=1
  }
}console.log("average =",sum/count);