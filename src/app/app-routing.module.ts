import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailTeacherComponent } from './pages/detail-teacher/detail-teacher.component';
import { AllTeacherComponent } from './pages/all-teacher/all-teacher.component';

const routes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'detail-teacher', component: DetailTeacherComponent },
     { path: 'all-teacher', component: AllTeacherComponent },

];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule],
})
export class AppRoutingModule {}
