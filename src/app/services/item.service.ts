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
import { Item } from '../store/models/item.models';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';

const {
  baseApiUrl,
  endpoints,
} = environment;

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private http: HttpClient) {}

  public getOne(id: number | string): Observable<Item> {
    return this.http
      .get<Item>(`${baseApiUrl}/${endpoints.item}/${id}.json`)
      .pipe(catchError((error) => Observable.throw(error)));
  }
}
