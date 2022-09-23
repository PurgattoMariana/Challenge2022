import { Component, OnInit } from '@angular/core';
import { QuestoesService } from '../shared/service/questoes.service';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

  allQuestions: any;
  question1: any;
  item = [];

  constructor( public questions: QuestoesService) { }

  ngOnInit(): void {
    this.allQuestions = this.questions.questoes;
    this.question1 = this.allQuestions.p1;
    this.questions.setAll(this.allQuestions);
    this.questions.getQuestions.subscribe((res: any) => {
      // console.log(res);
    });



  }
  $selectItem(item: any = [], index: number) {
     for( let i = 0; i < this.question1.length; i++) {
      if (i !== index ) {
        this.question1[i].selected = false;
      } else {
        this.question1[i].selected = true;
      }
    }
    this.questions.setAll(this.allQuestions);
  }

}


// option: 4,
// label: "5 ou mais pessoas",
// selected: false