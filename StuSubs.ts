export class Subjects{
    private subject : String;
    
    constructor(s:string)
    {
        this.subject=s;
    }

    getSubject()
    {
        return this.subject;
    }
    setSubject(s:string)
    {
         this.subject=s;
    }
}
