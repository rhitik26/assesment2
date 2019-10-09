import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { Educational } from 'src/Educational.modal';
import { EducationalDetailsComponent } from './educational-details/educational-details.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent},
  {path:'ed',component:EducationalDetailsComponent},
  {path:'pd',component:PersonalDetailComponent},
  {path:'view',component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
