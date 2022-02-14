import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import {  JoinNowComponent } from './join-now/join-now.component';


const routes:Routes=[
    {path:'',component:HomeComponent},
    {path:'About',component:AboutComponent},
    {path:'Join-Now',component:JoinNowComponent},
    {path:'Courses',component:CourseComponent},

]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}