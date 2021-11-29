import { Component, OnInit, Input} from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/Curso';

@Component({
  selector: 'app-general-page',
  templateUrl: './general-page.component.html',
  styleUrls: ['./general-page.component.css']
})
export class GeneralPageComponent implements OnInit {

  @Input() courseData = {sigla: '', nombre: '', creditos: 0, ciclo: '', electivo: false, horasTeoria: 4, horasPractica: 4,horasLaboratorio: 5, 
                          horasTeoricoPractica: 5, objetivoGeneral: '', electivos: [], requisitos: [], correquisitos: [], contenidos: [], 
                          itemesDescripcion: [], referenciasBibliograficas: [], resultadosDeAprendizaje: [], modalidad: {"idModalidad": 1, "tipoModalidad": "Virtual","cursos": []}, areaDisciplinaria: {"idAreaDisciplinaria": 1, "nombreDisciplinaria": "a", "cursos": []},
                          enfasis: [], planEstudio: {"idPlanEstudio":1,"anoAprobacion": 2020, "cantidadCiclos":3,"codigoCarrera":20000,"duracionAnos":3,"nombreCarrera": "Carrera test","cursos":[],"enfasis":[], "unidadesAcademicasPropietarias":[], "itemesPerfilEntrada":[],"itemesPerfilSalida":[],"grado":{"idGrado": 1, "nombre":"gradoTest","totalCreditosMaximo":2,"totalCreditosMinimo":1,"planesEstudio":[]}}, 
                          unidadesAcademicasPropietarias: []};
  
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  addCursoC() {

    let obj: Curso = JSON.parse('{ "sigla": "IF3001", "nombre": "Programación I", "creditos": 5, "ciclo": "II Ciclo", "electivo": 0, "horasTeoria": 4, "horasPractica": 4, "horasLaboratorio": 3, "horasTeoricoPractica": 0, "objetivoGeneral": "Prueba2", "electivos": [], "requisitos": [], "correquisitos": [], "contenidos": [], "itemesDescripcion": [], "referenciasBibliograficas": [], "resultadosDeAprendizaje": [], "modalidad": {"idModalidad": 1, "tipoModalidad": "Virtual","cursos": []}, "areaDisciplinaria": {"idAreaDisciplinaria": 1, "nombreDisciplinaria": "a", "cursos": []}, "enfasis": [], "planEstudio": {"idPlanEstudio":1,"anoAprobacion": 2020, "cantidadCiclos":3,"codigoCarrera":20000,"duracionAnos":3,"nombreCarrera": "Carrera test","cursos":[],"enfasis":[], "unidadesAcademicasPropietarias":[], "itemesPerfilEntrada":[],"itemesPerfilSalida":[],"grado":{"idGrado": 1, "nombre":"gradoTest","totalCreditosMaximo":2,"totalCreditosMinimo":1,"planesEstudio":[]}}, "unidadesAcademicasPropietarias": [] }');
  
    this.rest.addCurso(obj).subscribe((result) => {
    }, (err) => { console.log(err); });
  }

  addCourse() { 
    this.rest.addCurso(this.courseData).subscribe((result) => {
      //this.router.navigate(['/supporterlist']);
    }, (err) => {
      console.log(err);
    });
  }
  cancel() {
    //this.router.navigate(['/supporterlist']);
  }
}
