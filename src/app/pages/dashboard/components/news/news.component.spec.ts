import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';

import { AppModule } from '../../../../app.module';
import { MocksModule } from '../../../../mocks/mocks.module';
import { TableComponent } from '../table/table.component';
import { PaginationBarComponent } from '../pagination-bar/pagination-bar.component';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MocksModule,
      ],
      declarations: [
        NewsComponent,
        TableComponent,
        PaginationBarComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
