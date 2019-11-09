import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../DAL/student.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css']
})
export class EditDetailComponent implements OnInit {
  check:boolean=false;
  username: any;
  studentArray: any;
  student:any;
  url = './assets/db/Students.js';
  formStudent = {
    userName: '',
    fullName:'',
    eMail:'',
    gender:true,
    birthDay: Date,
    
  }
  constructor( private http: HttpClient) { }

  ngOnInit() {
    
  }
  change()
  {
   this.check=true;
  }
  unchange()
  {
   this.check=false;
  }
  getStudents(){
    return this.http.get(this.url)
  }
}
