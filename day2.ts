let array:number[]=[10,20,30,40,50];
console.log(array);

console.log("Using for loop");

for(var i=0;i<=array.length;i++)
{
     console.log(array[i]);
}
console.log("Iteration using for each: ")
array.forEach((element:number,i,a)=>{
  console.log("Elements at "+element+" position "+i+" is "+a);
});
console.log(array.join("#"));
console.log(array.join(" "));
console.log("\n");
array.push(100);
console.log(array);
let b= array.pop();
console.log(array);
console.log(b);