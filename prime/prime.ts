import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime-checker',
  templateUrl: './prime-checker.component.html',
  styleUrls: ['./prime-checker.component.css']
})
export class PrimeCheckerComponent implements OnInit{

  classname:string="";
  isprime:boolean=true;
  ans:string="";


  constructor() { }

  ngOnInit(): void {
  }

  checkPrime(data:any){

    let val=+data.value;
    for(let i:number=2;i<val/2;i++)
    {
      
      if(val%i==0){ 
        this.isprime=false;
        break;
      }
    }
    if(this.isprime){
      this.ans="Number is prime";
    }
    else{
      this.ans="Number is not prime";
    }
  
  }

}