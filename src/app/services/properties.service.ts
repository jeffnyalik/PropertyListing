import { Injectable } from '@angular/core';
import { Property } from '../models/properties/Property';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  propertyUrl = 'api/properties/';
  constructor(private http: HttpClient) { }
  
  getProperties(): Observable<Property[]>{
    return this.http.get<Property[]>(this.propertyUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) =>{
        console.log(error)
        return throwError(error)
      })
    )
  }
}
