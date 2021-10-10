import { Injectable } from '@angular/core';

import{HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import{Cliente} from '../models/cliente';
import{Parte} from '../models/parte';
import{Observable, throwError} from 'rxjs';
import{retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Path Api
  base_path_clientes = 'http://localhost:3000/clientes';
  base_path_partes = 'http://localhost:3000/partes';

  constructor(private http: HttpClient) { }

  //Http options
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //Handle API errors
  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Ha ocurrido un error:', error.error.message);
    }else{
      console.error(
        'Codigo Error ${error.status},' +
        'Body: ${error.error}');
    }
    return throwError('Ha sucedido un problema, reintentelo más tarde.');
  };

  //crea Partes
  createParte(item): Observable<Parte> {
    return this.http
      .post<Parte>(this.base_path_partes, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2), 
        catchError(this.handleError)
      )
  }

  getParte(id): Observable<Parte> {
    return this.http
      .get<Parte>(this.base_path_partes+'/'+id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getListParte(): Observable<Parte> {
    return this.http
      .get<Parte>(this.base_path_partes)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  updateParte(id, item): Observable<Parte> {
    return this.http
      .put<Parte>(this.base_path_partes+'/'+id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  deleteParte(id): Observable<Parte> {
    return this.http
      .delete<Parte>(this.base_path_partes+'/'+id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //Gestion de clientes
  getCliente(id): Observable<Cliente> {
    return this.http
      .get<Cliente>(this.base_path_clientes+'/'+id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getListCliente(): Observable<Cliente> {
    return this.http
      .get<Cliente>(this.base_path_partes)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  updateCliente(id, item): Observable<Cliente> {
    return this.http
      .put<Cliente>(this.base_path_partes+'/'+id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  deleteCliente(id): Observable<Cliente> {
    return this.http
      .delete<Cliente>(this.base_path_clientes+'/'+id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 

};
