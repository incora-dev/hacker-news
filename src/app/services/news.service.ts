import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {
  RequestOptions,
  Request,
  RequestMethod,
  Headers,
  RequestOptionsArgs,
} from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';

const {
  baseApiUrl,
  endpoints,
} = environment;

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<number[]> {
    return this.http
      .get<number[]>(`${baseApiUrl}/${endpoints.newStories}`)
      .pipe(catchError((error) => Observable.throw(error)));
  }
}
