import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent  {
  inputData: string = ''; // Property to store input data

    sendData(myvalue:string){
      console.log(myvalue)
    }


}