import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCallActionComponent } from './components/main-call-action/main-call-action.component';
import { SecondCallActionComponent } from './components/second-call-action/second-call-action.component';
import { MainCarouselComponent } from './components/main-carousel/main-carousel.component';
import { MainSubjectsComponent } from './components/main-subjects/main-subjects.component';
import { MainTeachersComponent } from './components/main-teachers/main-teachers.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { Page404Component } from './pages/page404/page404.component';
import { NoItemsComponent } from './components/no-items/no-items.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCallActionComponent,
    SecondCallActionComponent,
    MainCarouselComponent,
    MainSubjectsComponent,
    MainTeachersComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TeachersComponent,
    SubjectsComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    NoItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
