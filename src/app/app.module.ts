import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { HeaderComponent } from './shared/header/header.component';
import { RouterModule } from '@angular/router';
import { ROUTER } from './app-routing.module';
import { QuestoesService } from './shared/service/questoes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    QuestionsComponent,
    Question1Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTER),
    HttpClientModule
  ],
  providers: [QuestoesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
