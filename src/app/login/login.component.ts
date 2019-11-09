import { Component, OnInit } from '@angular/core';
import {StudentService} from '../DAL/student.service'
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private http : HttpClient, private stu: StudentService ) { }
  url = './assets/db/Students.js';
  checklogin :boolean = false;
  
  userNameToCheck: any;
  passwordToCheck: any;
  studentArray: any;
  student: any
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
        this.checklogin = true
      }
    }
  }
  }

  

