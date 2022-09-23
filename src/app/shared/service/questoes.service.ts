import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class QuestoesService {

     getQuestions: EventEmitter<any> = new EventEmitter();

 
  getAll() {
    return this.getQuestions;
  }

  setAll(value) {
    this.getQuestions.emit(value);
  }

  public questoes = { p1: [
    {
      option: 1,
      label: "2 a 3 pessoas",
      selected: false
    },
    {
      option: 2,
      label: "3 a 4 pessoas",
      selected: false
    },
    {
      option: 3,
      label: "4 a 5 pessoas",
      selected: false
    },
    {
      option: 4,
      label: "5 ou mais pessoas",
      selected: false
    }
    ],
    p2: [
    {
      option: 1,
      label: "2 a 3 pessoas",
      selected: false
    },
    {
      option: 2,
      label: "3 a 4 pessoas",
      selected: false
    },
    {
      option: 3,
      label: "4 a 5 pessoas",
      selected: false
    },
    {
      option: 4,
      label: "5 ou mais pessoas",
      selected: false
    }
    ]
}

}






