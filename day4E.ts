import {Shape} from './day4A';

export class Square extends Shape
{
        side:number;
        area:number;

        constructor(s:number)
        {
            super();
            this.side=s;
            this.area=0;
        }
        override myArea(): void {
            this.area=this.side*this.side;
        }
        display(){
            console.log(`
           
                Side  :: ${this.side}
                Area    :: ${this.area}
            `)
        }
}
