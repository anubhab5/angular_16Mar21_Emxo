import { Component } from '@angular/core';
import { MySvcService } from '../my-svc.service';
import { IMyInterface } from '../myInterface';
import { SvcTestParenService } from '../svc-test-paren.service';

@Component({
    selector: 'app-parent',
    templateUrl: './app-parent.component.html',
    styleUrls: ['./app-parent.component.css'],
    providers: [MySvcService]
})
export class AppParent implements IMyInterface {

    // private svc2: SvcTestParenService = new SvcTestParenService();
    // private mySvc: MySvcService = new MySvcService(this.svc2); // creating an object/ dependency manually

    generatedNumber: number = null;

    myMarks: number = 43; // 40 :
    studentNameClicked: string;
    firstName: string = "Jack";
    selectedStudentMark: number = null;

    todaysDate = new Date();

    myCartAmount: number = 1000;

    decimalValue = 12.3452;

    studentList = [
        {
            name: "jack",
            marks: 78
        },
        {
            name: "jane",
            marks: 38
        },
        {
            name: "john",
            marks: 22
        },
        {
            name: "mosh",
            marks: 90
        }
    ];

    dummyValue = "";

    getDymmyValue() { }

    power = 2;

    myNameinUppercase = "JACK_AND_JILL";
    myNameinlOWERcase = "jack";

    myLongString: string = "this is a very long string, this is a very long stringthis is a very long stringthis is a very long string";

    // constructor() { }
    constructor(private mySvc: MySvcService, private svc: SvcTestParenService) { }

    getMyName() {
        return "JOHN SNOW";
    }

    checkIfPassed(index: number) {
        const studentMark = this.studentList[index].marks;
        if (studentMark >= 40) {
            return true;
        } else {
            return false;
        }
    }

    getStudentList() {
        return this.studentList;
    }

    getStudentName(studentNameClicked) {
        debugger
        this.studentNameClicked = studentNameClicked;
        for (let i = 0; i < this.studentList.length; i++) {
            if (this.studentList[i].name === studentNameClicked) {
                this.selectedStudentMark = this.studentList[i].marks;
                break;
            }
        }
    }

    getCounterValue() {
        alert(this.mySvc.getCounter());
    }

    incrementCounterByOne() {
        this.mySvc.incrementCounterByOne("Parent");
    }
    
    generateRandomNumber () {
        this.generatedNumber = Math.random();
    }
}