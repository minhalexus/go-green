import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Energy } from './energy';

var httpOptions = {

}


@Injectable({
  providedIn: 'root'
})
export class EnergyService {

  constructor(private http: HttpClient) { }

  postEnergyValues (document : any): Observable<any> {
    var ret =  this.http.post('http://localhost:3000/energyhack', document, httpOptions)
    .pipe(
      catchError(this.handleError<any>())
    );
    return ret;
  }


    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      console.log('in handle error');

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
