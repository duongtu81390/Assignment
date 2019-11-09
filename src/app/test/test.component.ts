import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  url='../../assets/db/Subjects.js'
  subject:any;
  
  ipp = 4;
  cp = 1;
  totalPage: number;
  
  constructor( private http: HttpClient) { }


  ngOnInit() {
    this.getSubject().subscribe(data => 
      {
        this.subject=data;
        
      }
      )
      
    this.totalPage = Math.ceil(20 / this.ipp)
  }
  getSubject()
  {
    return this.http.get(this.url);
  }
  Next() {
    if (this.cp < this.totalPage) {
      this.cp++;
    }
  }
  Previous() {
    if (this.cp > 1) {
      this.cp--;
    }
  }
  First() {
    this.cp = 1;
  }
  Last() {
    this.cp = this.totalPage;
  }
}
