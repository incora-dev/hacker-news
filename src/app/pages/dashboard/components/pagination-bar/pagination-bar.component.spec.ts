import { EventEmitter } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationBarComponent } from './pagination-bar.component';

import { AppModule } from '../../../../app.module';
import { MocksModule } from '../../../../mocks/mocks.module';

describe('PaginationBarComponent', () => {
  let component: PaginationBarComponent;
  let fixture: ComponentFixture<PaginationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MocksModule,
      ],
      declarations: [ PaginationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change page', () => {
    component.pageCount = 5;
    component.changePage = new EventEmitter();
    expect(component.currentPage).toEqual(0);
    component.prevPage();
    expect(component.currentPage).toEqual(0);
    component.nextPage();
    expect(component.currentPage).toEqual(1);
    component.prevPage();
    expect(component.currentPage).toEqual(0);
  });
});
