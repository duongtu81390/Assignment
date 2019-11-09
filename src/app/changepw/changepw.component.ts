import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../DAL/student.service';

@Component({
  selector: 'app-changepw',
  templateUrl: './changepw.component.html',
  styleUrls: ['./changepw.component.css']
})
export class ChangepwComponent implements OnInit {

  constructor(private http: HttpClient, private stu: StudentService) { }
  url = './assets/db/Students.json';
  studentArray: any;
  student:any;
  userName: any;
  Password:any;
  nPassword: any;
  cPassword: any;
  ngOnInit() {
    this.getStudents().subscribe(data => {
      this.studentArray = data;
    })
    this.student = this.stu.getStudent();

  }
  changePass() {
    
    for (let index = 0; index < this.studentArray.length; index++) {
      if (this.nPassword != this.cPassword){
        window.alert('Mật khẩu nhập lại chưa đúng! Vui lòng nhập lại.')
        break}
      if (this.userName === this.studentArray[index].username && this.Password === this.studentArray[index].password) {
          this.studentArray[index].password=this.cPassword;
          window.alert('Đã đổi mật khẩu.')
      }
    }

  }
  getStudents() {
    return this.http.get(this.url)
  }
}
