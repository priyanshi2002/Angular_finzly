export class Emp{
    id : number;
    name : string;
    email : string;

    constructor(id:number, name:string , email:string){
        this.id = id; 
        this.name= name;
        this.email= email;
    }

    public showData(){
        console.log(`
            Id : ${this.id}
            Name : ${this.name}
            Email : ${this.email}
        `);
    }
};

let e = new Emp(111,"priya","priyashi@gmail.com");
e.showData();