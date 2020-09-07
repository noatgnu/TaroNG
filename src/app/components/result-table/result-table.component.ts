import {Component, Input, OnInit} from '@angular/core';
import {Result} from '../../class/result';
import {ColumnMode} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.styl']
})
export class ResultTableComponent implements OnInit {
  columns = [];
  get resultData(): Result {
    return this._resultData;
  }
  columnMode = ColumnMode;
  @Input() set resultData(value: Result) {
    this._resultData = value;
    this.columns = [];
    for (const c of this._resultData.columns) {
      this.columns.push(c);
    }

  }

  private _resultData: Result;

  constructor() { }

  ngOnInit(): void {
  }

}
