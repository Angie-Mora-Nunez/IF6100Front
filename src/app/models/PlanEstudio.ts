import { Grado } from "./Grado";

export class PlanEstudio {
    idPlanEstudio?: number;
    anoAprobacion?: number;
    cantidadCiclos?: number;
    codigoCarrera?: number;
    duracionAnos?: number;
    nombreCarrera?: string;
    cursos?: any;
    enfasis?: any;
    unidadesAcademicasPropietarias?: any;
    itemesPerfilEntrada?: any;
    itemesPerfilSalida?: any;
    grado?: Grado;

}