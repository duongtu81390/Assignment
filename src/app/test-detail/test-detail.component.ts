import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  id: any;
  sumMark = 0;
  toltalMark = 0;
  correctAns: any;
  finished: boolean = false;
  listSubjects: any;
  subjectForId: any;
  itemPerPage = 1;
  currentPage = 1;
  question: any;
  answer: any;
  totalPage: any;
  urlSubject = './assets/db/Quizs/';
  url = './assets/db/Subjects.js';
  ngOnInit() {
    const url = this.route.snapshot.paramMap.get('url');
    this.route.paramMap.subscribe(param => {
      this.id = +param.get('id')
    })

    this.getAllSubject().subscribe(data => {
      this.listSubjects = data;
      this.subjectForId = this.listSubjects.find(p => p.id === this.id);

    })


    switch (this.id) {
      case 1: this.urlSubject += 'ADAV.js'; break;
      case 2: this.urlSubject += 'ADBS.js'; break;
      case 3: this.urlSubject += 'ADTE.js'; break;
      case 4: this.urlSubject += 'ADUI.js'; break;
      case 5: this.urlSubject += 'ASNE.js'; break;
      case 6: this.urlSubject += 'CLCO.js'; break;
      case 7: this.urlSubject += 'DBAV.js'; break;
      case 8: this.urlSubject += 'DBBS.js'; break;
      case 9: this.urlSubject += 'GAME.js'; break;
      case 10: this.urlSubject += 'HTCS.js'; break;
      case 11: this.urlSubject += 'INMA.js'; break;
      case 12: this.urlSubject += 'JAAV.js'; break;
      case 13: this.urlSubject += 'JABS.js'; break;
      case 14: this.urlSubject += 'JSPR.js'; break;
      case 15: this.urlSubject += 'LAYO.js'; break;
      case 16: this.urlSubject += 'MOWE.js'; break;
      case 17: this.urlSubject += 'PHPP.js'; break;
      case 18: this.urlSubject += 'PMAG.js'; break;
      case 19: this.urlSubject += 'VBPR.js'; break;
      case 20: this.urlSubject += 'WEBU.js'; break;
    }

    this.getQuestion().subscribe(data => {
      this.question = data;
      this.answer = this.question[this.currentPage - 1].Answers;
      this.totalPage = Math.ceil(this.question.length / this.itemPerPage);
    })

    
  }

  getAllSubject() {
    return this.http.get(this.url)

  }

  getQuestion() {
    return this.http.get(this.urlSubject)
  }
  next() {
    if (this.currentPage < this.totalPage) {
      this.currentPage++;
      this.answer = this.question[this.currentPage - 1].Answers;
      console.log(this.correctAns)
      if (this.correctAns == this.question[this.currentPage - 2].AnswerId) {
        this.sumMark++;
        console.log(this.sumMark);
      }
    }

  }
  previous() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.answer = this.question[this.currentPage - 1].Answers;
    }

  }
  last() {
    this.currentPage = this.totalPage
  }
  first() {
    this.currentPage = 1;
  }
  finish() {
    this.finished = true;
    if (this.currentPage < this.totalPage) {
      this.currentPage++;
      this.answer = this.question[this.currentPage - 1].Answers;
      console.log(this.correctAns)
      if (this.correctAns == this.question[this.currentPage - 2].AnswerId) {
        this.sumMark++;
      }
    }
    this.toltalMark = this.sumMark;
    console.log(this.toltalMark)
  }
  yesNoQuestion() {
    this.finished = false;
  }

}
