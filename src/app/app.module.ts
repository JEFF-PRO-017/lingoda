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
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { DetailTeacherComponent } from './pages/detail-teacher/detail-teacher.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { AllTeacherComponent } from './pages/all-teacher/all-teacher.component';
import { ItemTeachersComponent } from './components/item-teachers/item-teachers.component';

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
          NoItemsComponent,
          DetailTeacherComponent,
          AgendaComponent,
          AllTeacherComponent,
          ItemTeachersComponent,
     ],
     imports: [
          BrowserModule,
          AppRoutingModule,
          TimelineModule,
          CardModule,
          CarouselModule,
          TagModule,
          ButtonModule,
          SlickCarouselModule,
          RatingModule,
          FormsModule
     ],
     providers: [],
     bootstrap: [AppComponent],
})
export class AppModule {}
