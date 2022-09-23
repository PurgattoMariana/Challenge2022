import { Component, OnInit } from '@angular/core';
import { QuestoesService } from '../shared/service/questoes.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  allQuestions: any;
  question1: any;

  constructor( public questions: QuestoesService) { }

  ngOnInit(): void {
    this.allQuestions = this.questions.questoes;
    this.questions.getQuestions.subscribe((res: any) => {
      this.allQuestions = res;
    });

  }

}
