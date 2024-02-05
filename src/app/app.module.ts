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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailTeacherComponent } from './pages/detail-teacher/detail-teacher.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { AllTeacherComponent } from './pages/all-teacher/all-teacher.component';
import { ItemTeachersComponent } from './components/item-teachers/item-teachers.component';
import { ChartModule } from 'primeng/chart';
import { ItemCvComponent } from './components/item-cv/item-cv.component';
import { Agenda2Component } from './components/agenda2/agenda2.component';
import { HeaderFilterComponent } from './components/header-filter/header-filter.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmsComponent } from './components/sms/sms.component';
import { ImageModule } from 'primeng/image';
import { HeaderHomeComponent } from './components/home/header-home/header-home.component';
import { MainLangueCarouselComponent } from './components/home/main-langue-carousel/main-langue-carousel.component';
import { NumbersStoryComponent } from './components/home/numbers-story/numbers-story.component';
import { StatNumberStoryComponent } from './components/home/stat-number-story/stat-number-story.component';
import { TopRatedComponent } from './components/home/top-rated/top-rated.component';
import { TopRatedTeachersComponent } from './components/home/top-rated-teachers/top-rated-teachers.component';
import { StatStarComponent } from './components/stat-star/stat-star.component';
import { BecomeTeacherComponent } from './components/home/become-teacher/become-teacher.component';
import { ReasonsLearnComponent } from './components/home/reasons-learn/reasons-learn.component';
import { OurStudentsComponent } from './components/home/our-students/our-students.component';
import { StudentsComponent } from './components/home/students/students.component';
import { TopRated2Component } from './components/home/top-rated2/top-rated2.component';
import { LangueComponent } from './components/home/langue/langue.component';

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
          ItemCvComponent,
          Agenda2Component,
          HeaderFilterComponent,
          SmsComponent,
          HeaderHomeComponent,
          MainLangueCarouselComponent,
          NumbersStoryComponent,
          StatNumberStoryComponent,
          TopRatedComponent,
          TopRatedTeachersComponent,
          StatStarComponent,
          BecomeTeacherComponent,
          ReasonsLearnComponent,
          OurStudentsComponent,
          StudentsComponent,
          TopRated2Component,
          LangueComponent,
     ],
     imports: [
          ReactiveFormsModule,
          BrowserModule,
          AppRoutingModule,
          TimelineModule,
          CardModule,
          CarouselModule,
          TagModule,
          ButtonModule,
          SlickCarouselModule,
          RatingModule,
          FormsModule,
          ChartModule,
          MultiSelectModule,
          BrowserAnimationsModule,
          ImageModule,
     ],
     providers: [],
     bootstrap: [AppComponent],
})
export class AppModule {}
