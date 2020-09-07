import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Query} from '../../class/query';
import {QueryService} from '../../services/query.service';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.styl']
})
export class QueryFormComponent implements OnInit {
  query = new Query('', '', '', '', 0);
  queryForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private queryService: QueryService) {
    this.queryForm = this.formBuilder.group({
      peptideSeq: '',
      startCodon: '',
      endCodon: '',
      database: ['upep'],
    });
  }

  ngOnInit(): void {

  }

  submitQuery(): void {
    this.queryService.announceStartQuery(false);
    this.query.peptideSeq = this.queryForm.value.peptideSeq;
    this.query.startCodon = this.queryForm.value.startCodon;
    this.query.endCodon = this.queryForm.value.endCodon;
    for (const db of this.queryForm.value.database) {
      this.query.database = db;
      console.log('Submit query.');
      this.queryService.announceQuery(this.query);
    }
  }
}
