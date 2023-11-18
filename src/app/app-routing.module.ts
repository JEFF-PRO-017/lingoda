import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailTeacherComponent } from './pages/detail-teacher/detail-teacher.component';

const routes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'detail-teacher', component: DetailTeacherComponent },
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule],
})
export class AppRoutingModule {}
