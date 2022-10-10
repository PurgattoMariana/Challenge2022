import { QuestionService } from './../service/question.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

  public questionList : any = [];
  public resultList : any = [];
  public currentQuestion : number = 0;
  public currentResult : number = 0;
  public variavelTemporaria : number = 0;
  public currentAnswer : string = "";
  public potencia : number = 0;
  public conforto : number = 0;
  public consumo : number = 0;
  public torque : number = 0;
  public portaMalas : number = 0;
  public espacoInterno : number = 0;
  isQuizCompleted : boolean = false;
  constructor(private questionService : QuestionService) { }

  ngOnInit(): void {
    this.getAllQuestions();
    this.getAllResults();
  }

  getAllQuestions(){
    this.questionService.getQuestionsJson()
    .subscribe(res=>{
      this.questionList = res.questions;
    })
  }
  getAllResults(){
    this.questionService.getResultJson()
    .subscribe(res=>{
      this.resultList = res.results;
    })
    console.log(this.resultList);
  }

  return (){
    this.currentQuestion--;
  }
  answer(currentQno: number, option:any){

    //if(this.currentQuestion = 2){
    //  this.isQuizCompleted = true;
    //}

    if(option.nopointsanswer){
      this.currentQuestion++;
    }
    if(option.usopessoal){
      this.currentQuestion = 9;
      this.currentQuestion++;
    }
    if(option.usoprofissional){
      this.currentQuestion++;
    }
    if(option.transportemercadoria){
      this.currentQuestion++;
    }
    if(option.transportepessoas){
      this.currentQuestion = 7;
      this.currentQuestion++;
    }
    if(option.transportemultiplo){
      this.currentQuestion++;
    }
    if(option.flexibilidade ){
      this.variavelTemporaria = 1;
      this.currentQuestion++;
    }
    if(option.protecao){
      this.variavelTemporaria = 2;
      this.currentQuestion++;
    }
    if((this.variavelTemporaria === 2 && option.obstaculo) || (this.variavelTemporaria === 1 && option.semobstaculo) ){
      this.variavelTemporaria = 0;
      this.currentQuestion++;

    }
    if((this.variavelTemporaria === 2 && option.semobstaculo) || option.importante){
      this.variavelTemporaria = 0;
      this.currentQuestion = 5;
      this.currentQuestion++;
    }
    if((this.variavelTemporaria === 1 && option.obstaculo) || option.naoimportante){
      this.variavelTemporaria = 0;
      this.currentQuestion = 6;
      this.currentQuestion++;
    }




    if(option.possuicarro){
      this.currentQuestion = 16;
      this.currentQuestion++;
    }
    if(option.nãopossuicarro){
      this.currentQuestion++;
    }




    if(option.usotrabalho){
      this.potencia += 20;
      this.conforto += 20;
      this.portaMalas += 10;
      this.currentQuestion++;
    }
    if(option.usoviagem){
      this.potencia += 30;
      this.conforto += 30;
      this.consumo -= 10;
      this.portaMalas  += 20;
      this.currentQuestion++;
    }
    if(option.usorotina){
      this.potencia -= 10;
      this.consumo += 10;
      this.portaMalas  -= 10;
      this.currentQuestion++;
    }
    if(option.usotodas){
      this.potencia -= 10;
      this.consumo += 10;
      this.portaMalas  -= 10;
      this.currentQuestion++;
    }


    if(option.pessoas2){
      this.consumo += 20;
      this.espacoInterno -= 20;
      this.currentQuestion++;
    }
    if(option.pessoas4){
      this.conforto += 10;
      this.espacoInterno -= 20;
      this.currentQuestion++;
    }
    if(option.pessoas5){
      this.conforto += 30;
      this.consumo -= 20;
      this.torque += 10;
      this.espacoInterno += 50;
      this.currentQuestion++;
    }
    if(option.portamalagrande){
      this.consumo -= 10;
      this.portaMalas  += 50;
      this.currentQuestion++;
    }
    if(option.portamalapequeno){
      this.consumo += 10;
      this.portaMalas  -= 50;
      this.currentQuestion++;
    }
    if(option.km15){
      this.consumo -= 10;
      this.currentQuestion++;
    }
    if(option.km610){
      this.consumo += 20;
      this.currentQuestion++;
    }
    if(option.km1020){
      this.consumo += 50;
      this.currentQuestion++;
    }
    if(option.km21mais){
      this.consumo += 50;
      this.currentQuestion++;
    }
    if(option.estradasim){
      this.potencia += 50;
      this.consumo -= 10;
      this.currentQuestion++;
    }
    if(option.estradanao){
      this.potencia += 20;
      this.consumo += 10;
      this.currentQuestion++;
    }
    if(option.ingremesim){
      this.consumo -= 10;
      this.torque += 50;
      this.currentQuestion++;
    }
    if(option.ingremenao){
      this.consumo += 20;
      this.torque += 20;
      this.currentQuestion++;
    }

    if(option.pessoas12){
      this.consumo += 20;
      this.espacoInterno -= 20;
      this.currentQuestion++;
    }
    if(option.pessoas34){
      this.conforto += 10;
      this.espacoInterno += 20;
      this.currentQuestion++;
    }
    if(option.pessoas5mais){
      this.conforto += 30;
      this.consumo -= 20;
      this.torque += 10;
      this.espacoInterno += 50;
      this.currentQuestion++;
    }
    if(option.distancia15){
      this.consumo -= 10;
      this.currentQuestion++;
    }
    if(option.distancia610){
      this.consumo += 20;
      this.currentQuestion++;
    }
    if(option.distancia1030){
      this.consumo += 50;
      this.currentQuestion++;
    }
    if(option.distancia30mais){
      this.consumo += 50;
      this.currentQuestion++;
    }
    if(option.obstaculosim){
      this.consumo -= 10;
      this.torque += 50;
      this.currentQuestion++;
    }
    if(option.obstaculonao){
      this.consumo += 20;
      this.torque += 20;
      this.currentQuestion++;
    }
    if(option.portamalalotado){
      this.consumo -= 10;
      this.portaMalas  += 50;
      this.currentQuestion++;
    }
    if(option.portamalamedio){
      this.portaMalas  += 20;
      this.currentQuestion++;
    }
    if(option.portamalavazio){
      this.consumo += 10;
      this.portaMalas  -= 50;
      this.currentQuestion++;
    }
    if(option.estradarotinasim){
      this.potencia += 50;
      this.consumo -= 10;
      this.currentQuestion++;
    }
    if(option.estradarotinanao){
      this.potencia += 20;
      this.consumo += 10;
      this.currentQuestion++;
    }
    if(option.viagemmuito){
      this.potencia += 30;
      this.conforto += 30;
      this.consumo -= 10;
      this.portaMalas  += 20;
      this.currentQuestion++;
    }
    if(option.viagemmedio){
      this.potencia += 20;
      this.conforto += 20;
      this.portaMalas  += 10;
      this.currentQuestion++;
    }
    if(option.viagempouco){
      this.potencia -= 10;
      this.consumo += 10;
      this.portaMalas  -= 10;
      this.currentQuestion++;
    }

















    if(option.mais14){
      this.isQuizCompleted = true;
      this.currentResult = 9;
    }
    if(option.menos14){
      this.isQuizCompleted = true;
      this.currentResult = 10;
    }
    if(option.maiorcapacidade){
      this.isQuizCompleted = true;
      this.currentResult = 8;
    }
    if(option.menorcapacidade){
      this.isQuizCompleted = true;
      this.currentResult = 7;
    }
    if(option.maiorcacamba){
      this.isQuizCompleted = true;
      this.currentResult = 3;
    }
    if(option.maiorcabine){
      this.isQuizCompleted = true;
      this.currentResult = 2;
    }














    this.currentAnswer = option;
    //console.log(this.questionList.length);
    console.log(this.currentAnswer);
    console.log(this.potencia);
    console.log(this.conforto);
    console.log(this.consumo);
    console.log(this.torque);
    console.log(this.portaMalas);
    console.log(this.espacoInterno);


  }
}
