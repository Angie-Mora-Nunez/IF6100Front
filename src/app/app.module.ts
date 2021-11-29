import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MatExpansionModule} from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { GeneralPageComponent } from './general-page/general-page.component';
import { RequirementsPageComponent } from './requirements-page/requirements-page.component';
import { ContentsPageComponent } from './contents-page/contents-page.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";



@NgModule({
  declarations: [
    AppComponent,
    GeneralPageComponent,
    RequirementsPageComponent,
    ContentsPageComponent,
    CoursePageComponent,
    MainPageComponent,
    EjemploComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    MatExpansionModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
