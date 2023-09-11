import { Vehicle } from "./day4"; 

export class Car extends Vehicle
{
    type:String;
    wheels: Number;

    constructor(wheel : number)
        {
           super();
           this.type="car";
           this.wheels=4;
        }
     override myVehicle(): void {
        this.wheels=4; 
    }

    display()
    {
        console.log(`
            Type :: ${this.type};
            Wheels :: ${this.wheels};
        `);
        
    }
}
