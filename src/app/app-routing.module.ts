import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
          path:"",component: HomePageComponent
  },
  {
          path: "home",component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
