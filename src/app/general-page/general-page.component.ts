import { Component, OnInit, Input} from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/Curso';
import { Modalidad } from "../models/Modalidad";
import { AreaDisciplinaria } from "../models/AreaDisciplinaria";
import { PlanEstudio } from "../models/PlanEstudio";

interface Resultados { // ejemplo
  idResultadoAprendizaje: string;
  descripcion: string;
}

@Component({
  selector: 'app-general-page',
  templateUrl: './general-page.component.html',
  styleUrls: ['./general-page.component.css']
})

export class GeneralPageComponent implements OnInit {
  selectedCar: string = ''; // ejemplo


  @Input() courseData = {sigla: '', nombre: '', creditos: 0, ciclo: '', electivo: true, horasTeoria: 0, horasPractica: 0,horasLaboratorio: 0, 
                          horasTeoricoPractica: 0, objetivoGeneral: '', curso:[ [{"idCurso":2}],  [{"idCurso":3}],  [{"idCurso":4}]], contenido: [{"idContenido":1}], 
                          itemDescripcion: [{"idDescripcion":1}], referenciasBibliograficas: [{"referencia":"ejemplo"}], resultadosDeAprendizaje: [{"descripcion":"ejemplo"},{"descripcion":"ejemplo2"}],
                          modalidad: {idModalidad: 1, "tipoModalidad": "Virtual","cursos": []},
                          areaDisciplinaria: {idAreaDisciplinaria: 1, "nombreDisciplinaria": "a", "cursos": []},
                          enfasis: [{"idEnfasis":1}], planEstudio: {"idPlanEstudio":1,"anoAprobacion": 2020, "cantidadCiclos":3,"codigoCarrera":20000,"duracionAnos":3,"nombreCarrera": "Carrera test","cursos":[],"enfasis":[], "unidadesAcademicasPropietarias":[], "itemesPerfilEntrada":[],"itemesPerfilSalida":[],"grado":{"idGrado": 1, "nombre":"gradoTest","totalCreditosMaximo":2,"totalCreditosMinimo":1,"planesEstudio":[]}}, 
                          unidadesAcademicasPropietarias: [{"idUnidadAcademica":1}]};
  
  issue: any;
  mod: any = []; //antes era showComen
  req: any = [];
  cr: any = [];
  area: any = [];

  cont: any = []; //para contendio
  descrip: any = []; //para descripcion
  uniAcade: any = []; // unidad academica
  enf: any = []; //enfasis
  plE: any = [];


  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
    this.getAreaDisciplinaria();
    this.getCursos();
    this.getModalidades();
    this.getPlanesEstudio();
    this.getContenido();
    this.getEnfasis();
    this.getItemDesc();
    this.getUnidadAcademica();
  }
  modalidadChange(value: string) {
    if (value) {
      this.courseData.modalidad.idModalidad = +value;
    }
 }
 areaChange(value: string) {
  if (value) {
    this.courseData.areaDisciplinaria.idAreaDisciplinaria = +value;
  }
 }
 unidadChange(value: any []) {
  if (value) {

    //this.courseData.unidadesAcademicasPropietarias = +value;

  }
 }
 coreqChange(value: string) {
  if (value) {
        //this.courseData.unidadesAcademicasPropietarias = +value;
  }
 }
  addCourse() { 

    this.rest.addCurso(this.courseData).subscribe((result) => {
     // this.router.navigate(['/supporterlist']);
    }, (err) => {
      console.log(err);
    });
  }
  getModalidades() {
    this.mod = [];
    this.rest.getModalidad().subscribe((data: {}) => {
      console.log(data);
      this.mod = data;
    });
  }
  getAreaDisciplinaria() {
    this.area =  [];
    this.rest.getAreaDisciplinaria().subscribe((data: {}) => {
      console.log(data);
      this.area = data;
    });
  }
  getContenido() {
    this.cont =  [];
    this.rest.getContenido().subscribe((data: {}) => {
      console.log(data);
      this.cont = data;
    });
  }
  getEnfasis() {
    this.enf =  [];
    this.rest.getEnfasis().subscribe((data: {}) => {
      console.log(data);
      this.enf = data;
    });
  }
  getItemDesc() {
    this.descrip =  [];
    this.rest.getItemDescripcion().subscribe((data: {}) => {
      console.log(data);
      this.descrip = data;
    });
  }
  getUnidadAcademica() {
    this.uniAcade =  [];
    this.rest.getUnidadesAcademicas().subscribe((data: {}) => {
      console.log(data);
      this.uniAcade = data;
    });
  }
  getPlanesEstudio() {
    this.plE =  [];
    this.rest.getPlanEstudio().subscribe((data: {}) => {
      console.log(data);
      this.plE = data;
    });
  }
  getCursos() {
    this.req = [];
    this.cr = [];
    this.rest.getCursos().subscribe((data: {}) => {
      console.log(data);
      this.req = data;
      this.cr = data;
    });
  }
  cancel() {
    this.router.navigate(['/agregarelectiva']);
  }
}
