console.log("Hello");

function add1(a:number,b:number)                                                    
            
{
  console.log("add is: "+(a+b));
}
//---------
var temp = add1(10,2);
console.log(temp);


//anonymus-with parameter and without return 

let temp1=function(a:number,b:number){
 console.log("Multiplication is: "+(a*b));
}
 let res1 = temp1(6,2);
 console.log(res1)


// ----------
let temp3=(a:number,b:number) =>{
     console.log("Multiplication is: "+(a*b));
}
let res2 = temp1(2,2);
console.log(res2)

// function------------------------3
function add3():number{
     return (8+8);
}
let res=add3();
console.log("Result is "+res);

//--------
let temp2=function():number{
    return (8*8);
}
let ans1=temp2();
console.log("Answer: "+ans1);
//----------
let temp4=():number=>{
    return (8*8);
}
let ans =temp4();
console.log("Answer "+ans);

