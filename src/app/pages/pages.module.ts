import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { BreakingComponent } from './breaking/breaking.component';
import { RouterLink, RouterLinkActive } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    BreakingComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterLink,
    RouterLinkActive
  ],
  exports:[
  HomeComponent
  ]
})
export class PagesModule { }
