import { AreaDisciplinaria } from "./AreaDisciplinaria";
import { Modalidad } from "./Modalidad";
import { PlanEstudio } from "./PlanEstudio";

export class Curso {
    idCurso?: number;
    sigla?: string;
    nombre?: string;
    creditos?: number;
    ciclo?: string;
    electivo?: boolean;
    horasTeoria?: number;
    horasPractica?: number;
    horasLaboratorio?: number;
    horasTeoricoPractica?: number;
    objetivoGeneral?: string;
    electivos?: any;
    requisitos?: any;
    corequisitos?: any;
    contenidos?: any;
    itemesDescripcion?: any;
    referenciasBibliograficas?: any;
    resultadosDeAprendizaje?: any;
    modalidad?: Modalidad;
    areaDisciplinaria?: AreaDisciplinaria;
    enfasis?: any;
    planEstudio?: PlanEstudio;
    unidadesAcademicasPropietarias?: any;

}