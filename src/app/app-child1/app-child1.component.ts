import { Component } from '@angular/core';

@Component({
    selector: 'app-child1',
    templateUrl: './app-child.component.html',
    styleUrls: ['./app-child1.component.css']
})
export class AppChild1 {

    firstName: string = "Jack";
    myMarks: number = 43; // 40 :

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

}