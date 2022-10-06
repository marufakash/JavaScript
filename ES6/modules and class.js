// ES6 modules - import, export
import {setText, text} from './myModule.js'

console.log(text);
setText("Goodbye from es6");
console.log(text);

// ES6 - class, constructor, object, set, get 

class student{

    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    set studentName(name){
        this.name =name;
    }

    get studentInfo(){
        return this.id + " " + this.name;
    }
}

let s1 = new student(101, "Maruf Akash");
console.log(s1);
s1 .studentName ="Tanzim Khan";
console.log(s1.name);
console.log(s1.studentInfo);