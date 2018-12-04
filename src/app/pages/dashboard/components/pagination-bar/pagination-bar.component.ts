import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination-bar',
  templateUrl: './pagination-bar.component.html',
  styleUrls: ['./pagination-bar.component.scss']
})
export class PaginationBarComponent implements OnInit {
  @Input() pageCount: number;
  @Output() changePage = new EventEmitter<number>();

  public currentPage = 0;

  constructor() { }

  ngOnInit() {
  }

  public prevPage() {
    if (this.currentPage !== 0) {
      --this.currentPage;
      this.changePage.emit(this.currentPage);
    }
  }

  public nextPage() {
    if (this.currentPage < this.pageCount) {
      ++this.currentPage;
      this.changePage.emit(this.currentPage);
    }
  }

}
