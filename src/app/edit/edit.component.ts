import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../DAL/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  check:boolean=false;
  constructor(private http: HttpClient,private stu: StudentService) { }
  userNameToCheck: any;
  passwordToCheck: any;
  studentArray: any;
  student: any
  url = './assets/db/Students.js';
  ngOnInit() {
    this.getStudents().subscribe(data =>{
      this.studentArray = data;
    })
    this.student = this.stu.getStudent();
  }
  getStudents(){
    return this.http.get(this.url)
  }
  checkLogin(){
    for(var student of this.studentArray){
      if((this.userNameToCheck === student.username) && (this.passwordToCheck === student.password)){
        this.check = true
      }
    }
  }


}
