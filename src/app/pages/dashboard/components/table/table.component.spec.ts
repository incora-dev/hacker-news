import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TimeAgoPipe } from 'time-ago-pipe';

import { TableComponent } from './table.component';

import { AppModule } from '../../../../app.module';
import { MocksModule } from '../../../../mocks/mocks.module';
import { Item } from 'app/store/models/item.models';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MocksModule,
      ],
      declarations: [
        TableComponent,
        TimeAgoPipe,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render rows', () => {
    component.items = [<Item>{}];
    expect(By.css('.item')).toBeTruthy(1);
  });
});
