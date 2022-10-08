import { QuestionService } from './../service/question.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

  public questionList : any = [];
  public currentQuestion : number = 0;
  public currentAnswer : string = "";
  public potencia : number = 0;
  public conforto : number = 0;
  public consumo : number = 0;
  public torque : number = 0;
  public portaMalas : number = 0;
  public espacoInterno : number = 0;
  constructor(private questionService : QuestionService) { }

  ngOnInit(): void {
    this.getAllQuestions();
  }

  getAllQuestions(){
    this.questionService.getQuestionsJson()
    .subscribe(res=>{
      this.questionList = res.questions;
    })
  }

  answer(currentQno:number, option:any){
    if(option.nopointsquestion){
    }
    if(option.usopessoal){
      this.currentQuestion = 9;
    }
    if(option.usoprofissional){
    }
    this.currentQuestion++;
    this.currentAnswer = option;
    console.log(this.currentAnswer);
  }
}
