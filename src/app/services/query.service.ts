import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Query} from '../class/query';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private querySource = new Subject<Query>();
  querySourceReader = this.querySource.asObservable();
  private queryStartSource = new BehaviorSubject<boolean>(null);
  queryStartReader = this.queryStartSource.asObservable();
  constructor() { }

  announceQuery(query: Query): void {
    this.querySource.next(query);
  }

  announceStartQuery(status: boolean): void {
    this.queryStartSource.next(status);
  }
}
