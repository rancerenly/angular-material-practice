import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatFactService {

  /*constructor(private http: HttpClient) { }
  configUrl = "https://catfact.ninja/fact";

  getCatFact() {
    return this.http.get(this.configUrl);
  }*/
}
