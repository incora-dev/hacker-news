import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../../store/models/item.models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() items: Item[];
  @Input() startIndex: number;

  constructor() { }

  ngOnInit() {
  }

}
