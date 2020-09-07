import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Query} from '../class/query';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private baseURL = 'http://localhost:8000/';
  constructor(private http: HttpClient) { }

  get_database(query: Query): Observable<HttpResponse<{}>> {
    let params = new HttpParams();
    params = params.append('db', query.database);
    params = params.append('peptideSeq', query.peptideSeq);
    params = params.append('startCodon', query.startCodon);
    params = params.append('endCodon', query.endCodon);
    params = params.append('pageOffset', JSON.stringify(query.pageOffset));
    const url = this.baseURL + 'api/';
    return this.http.get(url, {observe: 'response', params});
  }
}
