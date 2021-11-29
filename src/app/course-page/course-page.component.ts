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
    //this.getModalidades();
    this.addCursoC();

  }
  getModalidades() {
    this.showCommen = [];
    console.log("si pasa por el get");
    this.rest.getModalidad().subscribe((data: {}) => {
      this.showCommen = data;
    });
  }
//---------------------------------------------------------------------------------------------------
addCursoC() {

  let obj: Curso = JSON.parse('{ "sigla": "IF3001", "nombre": "Programación I", "creditos": 5, "ciclo": "II Ciclo", "electivo": 0, "horasTeoria": 4, "horasPractica": 4, "horasLaboratorio": 3, "horasTeoricoPractica": 0, "objetivoGeneral": "Prueba2", "electivos": [], "requisitos": [], "correquisitos": [], "contenidos": [], "itemesDescripcion": [], "referenciasBibliograficas": [], "resultadosDeAprendizaje": [], "modalidad": {"idModalidad": 1, "tipoModalidad": "Virtual","cursos": []}, "areaDisciplinaria": {"idAreaDisciplinaria": 1, "nombreDisciplinaria": "a", "cursos": []}, "enfasis": [], "planEstudio": {"idPlanEstudio":1,"anoAprobacion": 2020, "cantidadCiclos":3,"codigoCarrera":20000,"duracionAnos":3,"nombreCarrera": "Carrera test","cursos":[],"enfasis":[], "unidadesAcademicasPropietarias":[], "itemesPerfilEntrada":[],"itemesPerfilSalida":[],"grado":{"idGrado": 1, "nombre":"gradoTest","totalCreditosMaximo":2,"totalCreditosMinimo":1,"planesEstudio":[]}}, "unidadesAcademicasPropietarias": [] }');

  this.rest.addCurso(obj).subscribe((result) => {
  }, (err) => { console.log(err); });
}

//---------------------------------------------------------------------------------------------------
}
