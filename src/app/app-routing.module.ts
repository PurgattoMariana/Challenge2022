import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Question1Component } from './question1/question1.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [];

export class AppRoutingModule { }

export const ROUTER: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },  
  {
    path: 'question',
    component: QuestionsComponent,
  },  
  {
    path: 'question1',
    component: Question1Component,
  },
  
]
