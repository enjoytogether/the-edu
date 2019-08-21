import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';

const aboutRoutes: Routes = [
  { path:'',component:AboutComponent },
];

@NgModule({
  declarations: [],
  imports: [ CommonModule,
    RouterModule.forChild(aboutRoutes)
  ],
  exports: [],
  providers: [],
})
export class AboutRoutingModule {}
