import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { QuestoesService } from '../shared/service/questoes.service';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

  allQuestions: any;
  question2: any;
  item = [];

  constructor( public questions: QuestoesService, public router: Router) { }

  ngOnInit(): void {
    this.allQuestions = this.questions.questoes;
    this.question2 = this.allQuestions.p2;
    this.questions.setAll(this.allQuestions);
    this.questions.getQuestions.subscribe((res: any) => {
      // console.log(res);
    });

  }
  $selectItem(item: any = [], index: number) {
     for( let i = 0; i < this.question2.length; i++) {
      if (i !== index ) {
        this.question2[i].selected = false;
      } else {
        this.question2[i].selected = true;
      }
    }
    this.questions.setAll(this.allQuestions);
    this.router.navigateByUrl('/home');

  }
}
