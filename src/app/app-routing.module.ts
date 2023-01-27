import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BreakingComponent } from './pages/breaking/breaking.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  { path:'home', component:HomeComponent },
  { path:'login', component:LoginComponent },
  { path:'404', component:BreakingComponent },
  { path:'**', component:BreakingComponent },
  { path:'', redirectTo:'home', pathMatch:'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
