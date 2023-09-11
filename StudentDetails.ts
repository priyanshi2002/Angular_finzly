import { Student } from "./Student";
import { Subjects } from "./StuSubs";

export class StudentDetails implements Student{
    fname: string;
    lname: string;
    subject: Subjects;

    constructor(f:string ,l:string , sub : string)
    {
       this.fname=f;
       this.lname=l;
       this.subject = new Subjects(sub);
    }
    display() {
        console.log(`
        --- Student Details-----

        First name  :: ${this.fname}
        Last name   :: ${this.lname}
        Subject      :: ${this.subject}

    `)
        
    }
}
