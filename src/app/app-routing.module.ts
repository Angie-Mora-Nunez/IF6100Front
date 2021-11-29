import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { GeneralPageComponent } from './general-page/general-page.component';
import { RequirementsPageComponent } from './requirements-page/requirements-page.component';
import { ContentsPageComponent } from './contents-page/contents-page.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';

const routes: Routes = [

  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: MainPageComponent },
  { path: "courses", component: CoursePageComponent },
  { path: "general", component: GeneralPageComponent },
  { path: "requirement", component: RequirementsPageComponent },
  { path: "contents", component: ContentsPageComponent },
  {path: "ejemplo", component: EjemploComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
