import {Component, OnInit} from '@angular/core';
import {DatabaseService} from './services/database.service';
import {QueryService} from './services/query.service';
import {Observable} from 'rxjs';
import {Query} from './class/query';
import {Result} from './class/result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit{
  title = 'TaroNG';
  queryObserve: Observable<Query>;
  queryStartObserve: Observable<boolean>;
  result: Result[] = [];
  constructor(private db: DatabaseService, private queryService: QueryService) {
    this.queryObserve = this.queryService.querySourceReader;
    this.queryStartObserve = this.queryService.queryStartReader;
  }

  ngOnInit(): void {

    this.queryObserve.subscribe(query => {
      this.db.get_database(query).subscribe(data => {
        const r = new Result(data.body['database'], JSON.parse(data.body['data']), data.body['columns']);
        console.log(r);
        this.result.push(r);
      });
    });
  }

  clearResult(): void {
    this.result = [];
  }
}
