import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Modalidad } from 'src/app/models/Modalidad';
import { Curso } from './models/Curso';


const endpoint = 'http://localhost:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({ providedIn: 'root'})
export class RestService {

  private ModalidadSubject: BehaviorSubject<any>;
  public Modalidad: Observable<any>;

  constructor(private router: Router, private http: HttpClient) {
    this.ModalidadSubject = new BehaviorSubject<Modalidad>(JSON.parse(localStorage.getItem('Modalidad')|| '{}'));
    this.Modalidad = this.ModalidadSubject.asObservable();
  }



  private extractData(res: any) {
    let body = res;
    return body || {};
  }

  getModalidad(): Observable<any> {
    console.log("sin pasa por el servicio");
    return this.http.get(endpoint + "modalidad/modalidades").pipe(map(this.extractData),
    catchError(this.handleError<any>("lista de modalidades"))
    );
  }
//---------------------------------------------------------------------------------------------------
addCurso(curso: Curso): Observable<any> {
  return this.http.post<any>(endpoint + "curso/add/", JSON.stringify(curso), httpOptions)
    .pipe(tap((issue) => console.log("curso agregado")),
      catchError(this.handleError<any>("addCurso"))
    );
}

//---------------------------------------------------------------------------------------------------
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
