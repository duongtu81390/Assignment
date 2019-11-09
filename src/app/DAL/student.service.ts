import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  students = [];
  constructor() { }
  addToStudent(student) {
    this.students.push(student)
  }
  ngOnInit() {

  }
  changePassword(password: string)
  {
    
  }
  getStudent() {
    return this.students
  }
}
