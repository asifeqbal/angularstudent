import { Injectable } from '@angular/core';

 
@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  students = [
    { rn:1, fname: 'Asif', lname: 'Eqbal', dob:'12/03/2019', parentname: 'Abu', parentphone:'2836648269', address:'Kolkata' },
    { rn:2, fname: 'Amir', lname: 'Siddiqui', dob:'20/04/2019', parentname: 'Abu', parentphone:'83768234236', address:'Delhi' }
  ];
  constructor(){}
getStudents(){
  if(localStorage.getItem('students') != null){
    this.students = JSON.parse(localStorage.getItem('students'));
  }
return this.students;
}
addStudents(student){
  var updated = false;
  for(var i = 0; i < this.students.length; i++){
    if(student.id == this.students[i].id){
      updated = true;
      this.students[i] = student;
      localStorage.setItem('students', JSON.stringify(this.students));
      break;
    }
  }
if(!updated){
 student.id = Math.round(Math.random()*1000000);
  this.students.push(student);
  localStorage.setItem('students', JSON.stringify(this.students));
}
}
deleteAllStudents(id){
  for(var i = 0; i< this.students.length; i++){
    this.students.splice(i, this.students.length);
  }
}
deleteStudent(a){
  for(var i = 0; i< this.students.length; i++){
    if(a.id == this.students[i].id){
      this.students.splice(i, a.id);
    }
  }
}

getStudentById(id:number){
  for(var i = 0; i<this.students.length; i++){
    if(this.students[i].id==id){
      return this.students[i];
      break;
    }
   
    }
  };


}
