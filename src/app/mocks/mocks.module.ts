import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppModule } from '../app.module';
import { MocksRoutingModule } from './mocks.routing';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'app/store/app.states';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MocksRoutingModule,
    HttpClientTestingModule,
    StoreModule.forRoot(reducers, {}),
  ],
  exports: [
    MocksRoutingModule,
  ]
})
export class MocksModule { }
