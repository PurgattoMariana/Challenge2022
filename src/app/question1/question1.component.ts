import { QuestionService } from './../service/question.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

  public questionList : any = [];
  public answerList: any = [];
  public resultList : any = [];
  public sortArray : any = [];
  public result : any = [];
  public currentQuestion : number = 0;
  public currentResult : number = 0;
  public fakeResult : number = 0;
  public variavelTemporaria : number = 0;
  public currentAnswer : string = "";
  public potencia : number = 0;
  public conforto : number = 0;
  public consumo : number = 0;
  public torque : number = 0;
  public portaMalas : number = 0;
  public espacoInterno : number = 0;
  isQuizCompleted : boolean = false;
  resultadoGoPicape : boolean = false;
  resultadoGoSUV : boolean = false;

  public var1 : any = ["Conforto","Consumo","PortaMalas"];
  public var2 : any = ["Consumo","EspacoInterno","PortaMalas"];
  public var3 : any = ["Consumo","PortaMalas","Potencia"];
  public var4 : any = ["Consumo","PortaMalas","Torque"];
  public var5 : any = ["Conforto","Consumo","EspacoInterno"];
  public var6 : any = ["Conforto","Consumo","Potencia"];
  public var7 : any = ["Conforto","Consumo","Torque"];
  public var8 : any = ["Consumo","EspacoInterno","Potencia"];
  public var9 : any = ["Consumo","EspacoInterno","Torque"];
  public var10 : any = ["Consumo","Potencia","Torque"];
  public var11 : any = ["Conforto","EspacoInterno","PortaMalas"];
  public var12 : any = ["Conforto","PortaMalas","Potencia"];
  public var13 : any = ["Conforto","PortaMalas","Torque"];
  public var14 : any = ["EspacoInterno","PortaMalas","Potencia"];
  public var15 : any = ["EspacoInterno","PortaMalas","Torque"];
  public var16 : any = ["PortaMalas","Potencia","Torque"];
  public var17 : any = ["Conforto","EspacoInterno","Potencia"];
  public var18 : any = ["Conforto","EspacoInterno","Torque"];
  public var19 : any = ["Conforto","Potencia","Torque"];
  public var20 : any = ["EspacoInterno","Potencia","Torque"];







  constructor(private questionService : QuestionService, private http: HttpClient) { }

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

  addVariablesToArray(option:any){
    const items = [
      { name: 'Potencia', value: this.potencia },
      { name: 'Conforto', value: this.conforto },
      { name: 'Consumo', value: this.consumo },
      { name: 'Torque', value: this.torque },
      { name: 'PortaMalas', value: this.portaMalas },
      { name: 'EspacoInterno', value: this.espacoInterno }
    ];
    items.sort((a, b) => a.value - b.value);
    console.log(items);
    items.splice(0,3);
    console.log(items);

    this.result = [items[0].name,items[1].name,items[2].name].sort();
    console.log(this.result);

    this.compareArrays(option);

  }


  compareArrays(option:any){

    if((this.result[0] === this.var1[0]) && (this.result[1] === this.var1[1]) && (this.result[2] === this.var1[2])){
      this.isQuizCompleted = true;
      this.currentResult = 1;
    } else {
      console.log("false");
    }
    if((this.result[0] === this.var2[0]) && (this.result[1] === this.var2[1]) && (this.result[2] === this.var2[2])){
      this.resultadoGoPicape = true;
      this.return;
    } else {
      console.log("false");
    }
    if((this.result[0] === this.var3[0]) && (this.result[1] === this.var3[1]) && (this.result[2] === this.var3[2])){
      this.isQuizCompleted = true;
      this.currentResult = 1;
    } else {
      console.log("false");
    }
    if((this.result[0] === this.var4[0]) && (this.result[1] === this.var4[1]) && (this.result[2] === this.var4[2])){
      this.isQuizCompleted = true;
      this.currentResult = 1;
    } else {
      console.log("false");
    }
    if((this.result[0] === this.var5[0]) && (this.result[1] === this.var5[1]) && (this.result[2] === this.var5[2])){
      this.resultadoGoPicape = true;
      this.return;
    } else {
      console.log("false");
    }
    if((this.result[0] === this.var6[0]) && (this.result[1] === this.var6[1]) && (this.result[2] === this.var6[2])){
      this.resultadoGoPicape = true;
      this.return;
    } else {
      console.log("false");
    }
    if((this.result[0] === this.var7[0]) && (this.result[1] === this.var7[1]) && (this.result[2] === this.var7[2])){
      this.resultadoGoPicape = true;
      this.return;
    } else {
      console.log("false");
    }
    if((this.result[0] === this.var8[0]) && (this.result[1] === this.var8[1]) && (this.result[2] === this.var8[2])){
      this.resultadoGoPicape = true;
      this.return;
    } else {
      console.log("false");
    }
    if((this.result[0] === this.var9[0]) && (this.result[1] === this.var9[1]) && (this.result[2] === this.var9[2])){
      this.resultadoGoPicape = true;
      this.return;
    } else {
      console.log("false");
    }
    if((this.result[0] === this.var10[0]) && (this.result[1] === this.var10[1]) && (this.result[2] === this.var10[2])){
      this.isQuizCompleted = true;
      this.currentResult = 0;
    } else {
      console.log("false");
    }
    if((this.result[0] === this.var11[0]) && (this.result[1] === this.var11[1]) && (this.result[2] === this.var11[2])){
      this.isQuizCompleted = true;
      this.currentResult = 5;
    } else {
      console.log("false");
    }
    if((this.result[0] === this.var12[0]) && (this.result[1] === this.var12[1]) && (this.result[2] === this.var12[2])){
      this.isQuizCompleted = true;
      this.currentResult = 1;
    } else {
      console.log("false");
    }
    if((this.result[0] === this.var13[0]) && (this.result[1] === this.var13[1]) && (this.result[2] === this.var13[2])){
      this.isQuizCompleted = true;
      this.currentResult = 5;
    } else {
      console.log("false");
    }
    if((this.result[0] === this.var14[0]) && (this.result[1] === this.var14[1]) && (this.result[2] === this.var14[2])){
      this.isQuizCompleted = true;
      this.currentResult = 5;
    } else {
      console.log("false");
    }
    if((this.result[0] === this.var15[0]) && (this.result[1] === this.var15[1]) && (this.result[2] === this.var15[2])){
      this.isQuizCompleted = true;
      this.currentResult = 5;
    } else {
      console.log("false");
    }
    if((this.result[0] === this.var16[0]) && (this.result[1] === this.var16[1]) && (this.result[2] === this.var16[2])){
      this.resultadoGoSUV = true;
      this.return;
    } else {
      console.log("false16");
    }
    if((this.result[0] === this.var17[0]) && (this.result[1] === this.var17[1]) && (this.result[2] === this.var17[2])){
      this.isQuizCompleted = true;
      this.currentResult = 5;
    } else {
      console.log("false");
    }
    if((this.result[0] === this.var18[0]) && (this.result[1] === this.var18[1]) && (this.result[2] === this.var18[2])){
      this.isQuizCompleted = true;
      this.currentResult = 5;
    } else {
      console.log("false");
    }
    if((this.result[0] === this.var19[0]) && (this.result[1] === this.var19[1]) && (this.result[2] === this.var19[2])){
      this.isQuizCompleted = true;
      this.currentResult = 6;
    } else {
      console.log("false");
    }
    if((this.result[0] === this.var20[0]) && (this.result[1] === this.var20[1]) && (this.result[2] === this.var20[2])){
      this.isQuizCompleted = true;
      this.currentResult = 6;
    } else {
      console.log("false");
    }
    console.log(this.result);
  }


  answer(currentQno: number, option:any){

    if(option.nopointsanswer){
      this.fakeResult ++;
      this.currentQuestion++;
    }
    if(option.usopessoal){
      this.fakeResult ++;
      this.currentQuestion = 9;
      this.currentQuestion++;
    }
    if(option.usoprofissional){
      this.fakeResult ++;
      this.currentQuestion++;
    }
    if(option.transportemercadoria){
      this.fakeResult ++;
      this.currentQuestion++;
    }
    if(option.transportepessoas){
      this.fakeResult ++;
      this.currentQuestion = 7;
      this.currentQuestion++;
    }
    if(option.transportemultiplo){
      this.fakeResult ++;
      this.currentQuestion++;
    }
    if(option.transporteindividual){
      this.conforto += 10;
      this.consumo += 70;
      this.torque += 20;
      this.espacoInterno += 20;
      this.fakeResult ++;
      this.currentQuestion = 18;
      this.currentQuestion++;
    }
    if(option.flexibilidade ){
      this.fakeResult ++;
      this.variavelTemporaria = 1;
      this.currentQuestion++;
    }
    if(option.protecao){
      this.fakeResult ++;
      this.variavelTemporaria = 2;
      this.currentQuestion++;
    }
    if((this.variavelTemporaria === 2 && option.obstaculo) || (this.variavelTemporaria === 1 && option.semobstaculo) ){
      this.fakeResult ++;
      this.variavelTemporaria = 0;
      this.currentQuestion++;

    }
    if((this.variavelTemporaria === 2 && option.semobstaculo) || option.importante){
      this.fakeResult ++;
      this.variavelTemporaria = 0;
      this.currentQuestion = 5;
      this.currentQuestion++;
    }
    if((this.variavelTemporaria === 1 && option.obstaculo) || option.naoimportante){
      this.fakeResult ++;
      this.variavelTemporaria = 0;
      this.currentQuestion = 6;
      this.currentQuestion++;
    }

    if(option.possuicarro){
      this.fakeResult ++;
      this.currentQuestion = 16;
      this.currentQuestion++;
    }
    if(option.nãopossuicarro){
      this.fakeResult ++;
      this.currentQuestion++;
    }




    if(option.usotrabalho){
      this.fakeResult ++;
      this.potencia += 20;
      this.conforto += 20;
      this.portaMalas += 10;
      this.currentQuestion++;
    }
    if(option.usoviagem){
      this.fakeResult ++;
      this.potencia += 30;
      this.conforto += 30;
      this.consumo -= 10;
      this.portaMalas  += 20;
      this.currentQuestion++;
    }
    if(option.usorotina){
      this.fakeResult ++;
      this.potencia -= 10;
      this.consumo += 10;
      this.portaMalas  -= 10;
      this.currentQuestion++;
    }
    if(option.usotodas){
      this.fakeResult ++;
      this.potencia -= 10;
      this.consumo += 10;
      this.portaMalas  -= 10;
      this.currentQuestion++;
    }
    if(option.pessoas2){
      this.fakeResult ++;
      this.consumo += 20;
      this.espacoInterno -= 20;
      this.currentQuestion++;
    }
    if(option.pessoas4){
      this.fakeResult ++;
      this.conforto += 10;
      this.espacoInterno -= 20;
      this.currentQuestion++;
    }
    if(option.pessoas5){
      this.fakeResult ++;
      this.conforto += 30;
      this.consumo -= 20;
      this.torque += 10;
      this.espacoInterno += 50;
      this.currentQuestion++;
    }
    if(option.portamalagrande){
      this.fakeResult ++;
      this.consumo -= 10;
      this.portaMalas  += 50;
      this.currentQuestion++;
    }
    if(option.portamalapequeno){
      this.fakeResult ++;
      this.consumo += 10;
      this.portaMalas  -= 50;
      this.currentQuestion++;
    }
    if(option.km15){
      this.fakeResult ++;
      this.consumo -= 10;
      this.currentQuestion++;
    }
    if(option.km610){

      this.fakeResult ++;
      this.consumo += 20;
      this.currentQuestion++;
    }
    if(option.km1020){
      this.fakeResult ++;
      this.consumo += 50;
      this.currentQuestion++;
    }
    if(option.km21mais){
      this.fakeResult ++;
      this.consumo += 50;
      this.currentQuestion++;
    }
    if(option.estradasim){

      this.fakeResult ++;
      this.potencia += 50;
      this.consumo -= 10;
      this.currentQuestion++;
    }
    if(option.estradanao){
      this.fakeResult ++;
      this.potencia += 20;
      this.consumo += 10;
      this.currentQuestion++;
    }
    if(option.ingremesim){
      this.fakeResult ++;
      this.consumo -= 10;
      this.torque += 50;
      this.currentQuestion++;
      this.addVariablesToArray(option);
    }
    if(option.ingremenao){
      this.fakeResult ++;
      this.consumo += 20;
      this.torque += 20;
      this.currentQuestion++;
      this.addVariablesToArray(option);
    }
    if(option.pessoas12){
      this.fakeResult ++;
      this.consumo += 20;
      this.espacoInterno -= 20;
      this.currentQuestion++;
    }
    if(option.pessoas34){
      this.fakeResult ++;
      this.conforto += 10;
      this.espacoInterno += 20;
      this.currentQuestion++;
    }
    if(option.pessoas5mais){
      this.fakeResult ++;
      this.conforto += 30;
      this.consumo -= 20;
      this.torque += 10;
      this.espacoInterno += 50;
      this.currentQuestion++;
    }
    if(option.distancia15){
      this.fakeResult ++;
      this.consumo -= 10;
      this.currentQuestion++;
    }
    if(option.distancia610){
      this.fakeResult ++;
      this.consumo += 20;
      this.currentQuestion++;
    }
    if(option.distancia1030){
      this.fakeResult ++;
      this.consumo += 50;
      this.currentQuestion++;
    }
    if(option.distancia30mais){
      this.fakeResult ++;
      this.consumo += 50;
      this.currentQuestion++;
    }
    if(option.obstaculosim){

      this.fakeResult ++;
      this.consumo -= 10;
      this.torque += 50;
      this.currentQuestion++;
    }
    if(option.obstaculonao){
      this.fakeResult ++;
      this.consumo += 20;
      this.torque += 20;
      this.currentQuestion++;
    }
    if(option.portamalalotado){
      this.fakeResult ++;
      this.consumo -= 10;
      this.portaMalas  += 50;
      this.currentQuestion++;
    }
    if(option.portamalamedio){
      this.fakeResult ++;
      this.portaMalas  += 20;
      this.currentQuestion++;
    }
    if(option.portamalavazio){
      this.fakeResult ++;
      this.consumo += 10;
      this.portaMalas  -= 50;
      this.currentQuestion++;
    }
    if(option.estradarotinasim){
      this.fakeResult ++;
      this.potencia += 50;
      this.consumo -= 10;
      this.currentQuestion++;
    }
    if(option.estradarotinanao){
      this.fakeResult ++;
      this.potencia += 20;
      this.consumo += 10;
      this.currentQuestion++;
    }
    if(option.viagemmuito){
      this.fakeResult ++;
      this.potencia += 30;
      this.conforto += 30;
      this.consumo -= 10;
      this.portaMalas  += 20;
      this.currentQuestion++;
      this.addVariablesToArray(option);
    }
    if(option.viagemmedio){
      this.fakeResult ++;
      this.potencia += 20;
      this.conforto += 20;
      this.portaMalas  += 10;
      this.currentQuestion++;
      this.addVariablesToArray(option);
    }
    if(option.viagempouco){
      this.fakeResult ++;
      this.potencia -= 10;
      this.consumo += 10;
      this.portaMalas  -= 10;
      this.currentQuestion++;
      this.addVariablesToArray(option);
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
      this.currentResult = 2;
    }
    if(option.maiorcabine){
      this.resultadoGoPicape = true;
      this.currentQuestion=22;
      this.currentQuestion++;
    }


    if(this.resultadoGoPicape === true && option.carroano){
      this.currentQuestion++;
    }
    if(this.resultadoGoPicape === true && option.trocamuito){
      this.currentQuestion++;
    }
    if(this.resultadoGoPicape === true && option.manutencaosim){
      this.isQuizCompleted = true;
      this.currentResult = 11;
    }
    if(this.resultadoGoPicape === true && (option.carrousado || option.carrovelho || option.trocapouco || option.manutencaonao)) {
      this.isQuizCompleted = true;
      this.currentResult = 3;
    }


    if(this.resultadoGoSUV === true && option.carroano){
      this.currentQuestion++;
    }
    if(this.resultadoGoSUV === true && option.trocamuito){
      this.currentQuestion++;
    }
    if(this.resultadoGoSUV === true && option.manutencaosim){
      this.isQuizCompleted = true;
      this.currentResult = 12;
    }
    if(this.resultadoGoSUV === true && (option.carrousado || option.carrovelho || option.trocapouco || option.manutencaonao)) {
      this.isQuizCompleted = true;
      this.currentResult = 4;
    }


    this.currentAnswer = option;
    this.answerList.push(this.currentAnswer["text"]);

    if(this.isQuizCompleted==true){
      console.log("Enviando dados...")
      console.log(this.resultList[this.currentResult].title);
      this.answerList.push(this.resultList[this.currentResult].title);
      this.http
        .post("https://challenge-ford-backend.herokuapp.com/api/book",this.answerList).subscribe();
      console.log("Dados enviados")
    }

    console.log(this.currentAnswer);
    console.log(this.answerList);
    console.log(this.potencia);
    console.log(this.conforto);
    console.log(this.consumo);
    console.log(this.torque);
    console.log(this.portaMalas);
    console.log(this.espacoInterno);
  }
}
