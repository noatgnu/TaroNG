import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {DatabaseService} from './services/database.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QueryFormComponent } from './components/query-form/query-form.component';
import {QueryService} from './services/query.service';
import { ResultTableComponent } from './components/result-table/result-table.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    QueryFormComponent,
    ResultTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxDatatableModule
  ],
  providers: [
    DatabaseService,
    QueryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
