import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { STUDENTS } from './mockstudent';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
 student:Student= {
  rn:0 ,
  fname: '',
  lname: '',
  dob: '',
  parentname: '',
  parentphone: '',
  address: ''
};
 students=STUDENTS; 

  constructor() { }


  OnDetails(){
    var obj1={
      rn:this.students.length+1,
      fname:this.student.fname,
      lname:this.student.lname,
      dob:this.student.dob,
      parentname:this.student.parentname,
      parentphone:this.student.parentphone,
      address:this.student.address,
      
    }
    this.students.push(obj1);
  }

  removeStudent(id){
    for(var i=0;i<this.students.length;i++){
      if(id==this.students[i].id){
        this.students.splice(i,1);
      }
    }
 }
 selectedStudent: Student;
 onSelect(student: Student): void{
   this.selectedStudent = student;
 }

}
