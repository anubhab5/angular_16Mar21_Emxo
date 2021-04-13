class Person {
    firstName: string;
    nationality: string;

    getDetail() { }

    static getMyNationality() { }

    static myName: string = "Abc";
}


const p1 = new Person();

// p1.

Person.getMyNationality();
Person.myName;