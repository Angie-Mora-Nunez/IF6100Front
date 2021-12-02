import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from "src/app/rest.service";
import { Curso } from 'src/app/models/Curso';
import { Modalidad } from "../models/Modalidad";
import { AreaDisciplinaria } from "../models/AreaDisciplinaria";
import { PlanEstudio } from "../models/PlanEstudio";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

 

  issue: any;
  showCommen: any = [];
  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private rest: RestService, private router: Router) {

  }
  ngOnInit() {


  }

}
